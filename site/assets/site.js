'use strict';
// Presentation controls only. No model, physics solver or prediction runs here.
const video = document.getElementById('contact-video');
const speed = document.getElementById('speed');
const status = document.getElementById('playback-status');
function updateStatus() {
  status.textContent = `${video.ended ? 'Ended' : video.paused ? 'Paused' : 'Playing'} · ${video.playbackRate}×`;
}
document.getElementById('replay').addEventListener('click', async () => {
  video.currentTime = 0;
  try { await video.play(); } catch (_) { status.textContent = 'Use the video play control to start.'; }
});
speed.addEventListener('change', () => { video.playbackRate = Number(speed.value); updateStatus(); });
['play', 'pause', 'ended', 'ratechange', 'loadedmetadata'].forEach(name => video.addEventListener(name, updateStatus));
const stages = [
  'Inputs include supplied public Gaussian reconstructions and a separate object appearance fitting study. The public reference fixture is authored procedurally.',
  'Persistent Gaussian identities associate visual samples with physical parts. Coordinate and scale conventions connect rendering and engine state. Detailed methods remain private.',
  'Collision proxies and a physics engine generate state changes. Assumed material settings are explicit; these are not measurements of the reconstructed real object.',
  'Recorded state drives synchronized inspection and playback. Appearance quality, contact behavior and endpoint prediction are evaluated as separate questions.'
];
document.querySelectorAll('[data-stage]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-stage]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  document.getElementById('stage-detail').textContent = stages[Number(button.dataset.stage)];
}));
