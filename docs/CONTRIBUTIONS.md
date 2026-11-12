# Contribution scope

This is a project-level description of work completed in the private research workspace. It distinguishes integration and evaluation work from established upstream methods. It does not claim sole invention of the research field or full independent paper reproduction.

| Project work | Practical outcome | Established upstream foundation |
|---|---|---|
| Scene adapters and representation contracts | Coordinate / scale alignment across Gaussian appearance, collision geometry and playback | Gaussian scene representations and engine conventions |
| Visual / physical part association | Persistent identity and covariance transport for recorded part motion | Existing Gaussian and rigid-body mathematics |
| Contact and inspection integration | Physics-engine contact scenes, Gaussian / geometry composition, UE playback and browser inspection | MuJoCo, Unreal Engine and supplied scene assets |
| Controlled evaluation | Command-conditioned prediction baselines, grouped splits, frozen forecasts and independent score recomputation | MIT real pushing measurements and standard error metrics |
| Reconstruction diagnosis | A measured appearance candidate comparison and explicit reused-view caveat | Public capture data and established Gaussian fitting methods |

## Research position

The demonstrated contribution is research engineering and empirical investigation of the interface between Gaussian appearance and interaction. The evidence identifies where an integrated pipeline works and where prediction fails. It does not support a claim of a generally superior Gaussian world model, a novel validated material inference method, or autonomous real-robot manipulation.

## Collaboration directions

1. Calibrate physical scale and material response against real objects.
2. Evaluate new objects, contact regimes and observation noise with independent splits.
3. Extend contact and deformation modeling with uncertainty estimates.
4. Separate baked scene appearance from illumination changes and dynamic shadows.
5. Connect state estimation and dynamics to closed-loop manipulation policies.

Project contact: [cusdn](https://github.com/cusdn). Specific responsibilities, contributor credit and access to private evidence can be discussed directly with the owner.
