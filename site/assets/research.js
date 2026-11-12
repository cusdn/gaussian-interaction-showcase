'use strict';
// Presentation state only. No model weights, engine control or research algorithms.
const mainVideo=document.getElementById('robot-main');
const closeVideo=document.getElementById('robot-close');
const speed=document.getElementById('robot-speed');
const status=document.getElementById('robot-status');
const actions={
  pot_push_soft:{title:'Push the pot through robot contact',description:'Joint motors move the Panda paddle into the rigid pot proxy. The stand and bound Gaussian appearance respond through the simulated contact and support chain.',pot:'70.86 mm',canopy:'87.75 mm',force:'13.186 N'},
  canopy_brush_soft:{title:'Canopy contact and recovery',description:'The motor-driven paddle brushes the flower clusters, then withdraws. The assumed elastic joints drive the recovery; the plant is not animated by directly assigning an object trajectory.',pot:'0.05 mm',canopy:'39.25 mm',force:'0.313 N'},
  stem_nudge_soft:{title:'Trunk response and release',description:'Robot contact displaces the trunk proxy and connected canopy. The elastic-joint approximation drives recovery after withdrawal. It is not an individual-leaf or continuum-material model.',pot:'3.58 mm',canopy:'133.83 mm',force:'6.717 N'},
  canopy_brush_hard:{title:'Changed material assumptions',description:'The same interaction type uses the alternate heavier / stiffer hypothesis combination. Multiple factors change together, so this is not a single-factor causal stiffness ablation.',pot:'0.14 mm',canopy:'40.19 mm',force:'0.639 N'}
};
function updateStatus(){const label=mainVideo.ended?'Ended':mainVideo.paused?'Paused':'Playing';status.textContent=`${label} · ${mainVideo.playbackRate}×`;document.getElementById('robot-play').textContent=mainVideo.paused?'Play both views':'Pause both views';}
async function playBoth(){try{await Promise.all([mainVideo.play(),closeVideo.play()]);}catch(_){status.textContent='Use the main video play control to begin.';}}
function pauseBoth(){mainVideo.pause();closeVideo.pause();updateStatus();}
function synchronize(){if(Number.isFinite(closeVideo.duration)&&Math.abs(closeVideo.currentTime-mainVideo.currentTime)>.12)closeVideo.currentTime=mainVideo.currentTime;}
mainVideo.addEventListener('play',()=>{synchronize();closeVideo.play().catch(()=>{});updateStatus();});
mainVideo.addEventListener('pause',()=>{closeVideo.pause();updateStatus();});
mainVideo.addEventListener('seeking',synchronize);
mainVideo.addEventListener('timeupdate',synchronize);
mainVideo.addEventListener('ratechange',()=>{closeVideo.playbackRate=mainVideo.playbackRate;updateStatus();});
mainVideo.addEventListener('ended',()=>{if(document.getElementById('robot-loop').checked){mainVideo.currentTime=0;closeVideo.currentTime=0;playBoth();}else updateStatus();});
document.getElementById('robot-play').addEventListener('click',()=>mainVideo.paused?playBoth():pauseBoth());
document.getElementById('robot-replay').addEventListener('click',()=>{mainVideo.currentTime=0;closeVideo.currentTime=0;playBoth();});
speed.addEventListener('change',()=>{mainVideo.playbackRate=Number(speed.value);closeVideo.playbackRate=Number(speed.value);updateStatus();});
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{
  const key=button.dataset.case,action=actions[key];pauseBoth();
  document.querySelectorAll('[data-case]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));
  for(const [video,view] of [[mainVideo,'overview'],[closeVideo,'contact']]){video.src=`media/${key}-${view}.mp4`;video.poster=`media/${key}-${view}.jpg`;video.load();video.playbackRate=Number(speed.value);}
  document.getElementById('action-title').textContent=action.title;document.getElementById('action-description').textContent=action.description;
  document.getElementById('pot-metric').textContent=action.pot;document.getElementById('canopy-metric').textContent=action.canopy;document.getElementById('force-metric').textContent=action.force;updateStatus();
}));
for(const mode of ['appearance','parts'])document.getElementById(mode+'-toggle').addEventListener('click',()=>{
  document.getElementById('part-image').src=`media/bonsai-${mode}.png`;
  document.getElementById('part-image').alt=mode==='parts'?'Color-coded scene-specific visual / physical part association':'Original Gaussian Bonsai appearance before the part-color overlay';
  for(const other of ['appearance','parts'])document.getElementById(other+'-toggle').setAttribute('aria-pressed',String(mode===other));
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){pauseBoth();document.getElementById('ue-video').pause();}});
updateStatus();
