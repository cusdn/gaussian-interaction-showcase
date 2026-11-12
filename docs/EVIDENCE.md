# Evidence boundaries

The showcase reports distinct completed studies. It does not pool assets, observations or metrics into one success claim.

| Claim | Observed evidence | Boundary |
|---|---|---|
| Bonsai reconstruction | 30k Gaussian Grouping training, 255 training / 37 image-loss holdout views, 2,453,898 Gaussians, 31.437 dB / 0.9364 SSIM | Same capture, supplied COLMAP; later development reused views; no measured physical scale |
| Main contact demonstration | Supplied 239,941-Gaussian scene, four conditions / eight original views, motor-driven Panda contact | Separate from the trained baseline; SH0 recording with baked illumination |
| Part-wise simulation | Persistent association, center and covariance transport, pot / stand motion and elastic canopy / trunk proxies | Scene-specific grouping, uncertain boundaries, assumed materials, no leaf shells / granular soil / fracture |
| Physical source of motion | Same recorded motor commands with contact disabled as a paired control; trajectory differences | Validates tested simulation contact influence, not real-plant mechanics |
| Complete SH / UE | Separate trained-model third-order SH / HDR candidate, native numerical checks, later actual DX11 / UDP state runs | Separate from the included older UE video; limited run / occlusion scope, no generic relighting |
| Native controls | Actual UE control panel and callback / state checks | Recorded playback; speed does not recompute physics; no claim that every OS mouse action was independently tested |
| Material probes | Simulated unseen oblique-push marker error 35.68 → 7.71 mm after two probes | 64 cases, nominal scale / known force and marker alignment; fixed and one-probe controls are competitive |
| Follow-up probe generalization | 128 new cases / 640 solves; within-regime 6.75 vs fixed 7.02 mm, changed regime 11.73 vs fixed 11.26 mm | Overall cross-condition criterion fails |
| Gaussian world-model adaptation | Camera / raw-depth repairs, multiview supervision, relative commands, decomposition variants and ablations | Adapted research prototype, not full original semantic-teacher / behavior-cloning training reproduction |
| Online goal reaching | 30 configurations / 60 goals / 960 replays across 16 method-seed labels; 99.4% vs 83.3% | One drawer, supplied grasp prefix / action library / goal RGB-D, at most two macro-actions; no cross-asset or real-robot claim |
| Free stacking / dominoes | 32/32 each; domino no-action controls 8/8 upright | Known-state controllers, authored Gaussian blocks, idealized simulator geometry; UE is playback |
| Real-record pushing | Command-conditioned endpoint correction improves interpolation and fails stronger transfer criterion | One square object / surface, original aggregate facts only; no raw record release |

## Numerical interpretation

The goal-reaching threshold measures the final executed drawer position within 20 mm and no execution error. It is not a 3DGS image or geometry error. Goals are averaged within an independent configuration before configurations and training seeds are averaged. Repeated training seeds and goals do not create new independent configurations. Exploratory intervals are not adjusted for multiple comparisons.

The material marker metric concerns simulated displacement for a new action within a defined hypothesis benchmark. It is not an estimate of true wood, ceramic, soil or leaf properties. Active selection is compared with suitable fixed probes and retains changed-contact failures.

The real pushing endpoint metric is the per-trial RMS error over four planar corners, averaged over repetitions within nominal actions and then equally over action groups. Initial state and commanded action are inputs; future measured actuator motion is excluded. This is not the online drawer policy study.

## Research position

The project demonstrates integration and controlled evidence. It supports bounded empirical gains and useful failure diagnoses, not a general high-fidelity Gaussian world model, unique new method, automatic real material identification or real-robot deployment. Private source and full experiment records are not released, so this is a presentation summary rather than a reproducible code / data publication.
