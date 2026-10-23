---
layout: post
order: 5
title: "NASA MoonRanger: CAD, FEA, EMI, and Validation"
description: "Mechanical lead: wheel vibration analysis, EMI packaging, and deployment-test design."
skills:
  - Structural FEA
  - Modal and random vibration analysis
  - SolidWorks and GD&T
  - Design verification
  - Flight hardware integration
  - EMI mitigation
  - Mechanical test planning
  - Manufacturing drawings
main-image: "/cover.png"
---

<div class="project-lede bluf-card"><p>I serve as Mechanical Lead for the MoonRanger rover under Red Whittaker and Heather Jones. I know the title is 75% vague acronyms, so please keep reading. It'll make sense, I swear.</p></div>

## What's the point?

MoonRanger is planned to fly as a payload with Firefly Aerospace in 2029, and it won't get a gentle ride to the lunar surface. Though I've analyzed whether MoonRanger could overheat during transit, launch vibrations pose another risk: they could shake critical hardware apart. Even after surviving launch, what if the hold-down and release mechanisms (HDRMs) fail? Or electromagnetic interference (EMI) compromises sensor data?

Aerospace has taught me that every extra component or line of errant code can threaten a mission that took years and millions of dollars to build. I was tasked with putting several of these risks to bed: **model the problem, make the design decision, release the drawings, and prepare the hardware for verification.**

**Objectives**

- **MoonRanger CAD & FEA:** Revise wheel and camera-shroud geometry for new ground-pressure and occlusion requirements; correlate the old wheel model; verify the redesigned wheel under modal and random-vibration loading against the 100 Hz first-mode requirement; release drawings and procure hardware.
- **EMI Mitigation:** Secure ferrite cores within the rover avionics volume and analyze the mount against the 100 Hz modal requirement.
- **HDRM Drop Deployment Test:** Design a one-sixth-mass DropBot surrogate with representative bounding geometry and center of mass, and write a detailed deployment test plan.

## How did I do it?

### Wheel Model Correlation and Redesign

<div class="figure-row single"><figure class="figure-card wide"><img src="/assets/images/portfolio/moonranger-wheel-bracket-first-mode.gif" alt="Animated ANSYS first-mode deformation of the finalized MoonRanger wheel bracket"><figcaption>FEA Finalized Wheel Bracket — First Mode (144.68 Hz)</figcaption></figure></div>

After selecting a larger, wider **220 mm wheel**, I rebuilt the previous **190 mm wheel** analysis and compared its first natural frequency with earlier experimentally corroborated data. The reconstructed model yielded **154.23 Hz**, versus **155.1 Hz** from the prior test-backed result: a difference of roughly **0.6%**.

The ANSYS workflow used:

- Custom equivalent materials for irregular mass distributions in the wheel actuator and bearing.
- Fixed supports at three wheel-bracket fastener interfaces.
- A 10 mm global mesh with local refinement around mounting holes.
- Falcon 9 random-vibration acceleration inputs along the launch-critical axis.

<div class="figure-row two moonranger-modal-pair"><figure class="figure-card"><img src="/assets/images/portfolio/moonranger-wheel-baseline-modal.png" alt="190 mm wheel modal result"><figcaption>190 mm Wheel Baseline — 154.23 Hz First Mode</figcaption></figure><figure class="figure-card"><img src="/assets/images/portfolio/moonranger-wheel-new-modal.png" alt="220 mm wheel modal result"><figcaption>220 mm Wheel — 139.34 Hz First Mode</figcaption></figure></div>

I then ran the redesigned wheel through random-vibration loading. The highest reported stress, **304 MPa**, occurred at the constrained wheel-bracket mounting interface. After checking that this wasn't a mesh singularity, I treated the result as a joint-level verification flag. It exceeded the nominal yield strength of 6061-T6 aluminum, so I revised the design with a washer to distribute force. I integrated the revised module into the rover CAD assembly, made the shop drawing using **ASME Y14.5 GD&T**, and sourced **five new wheels**.

<div class="figure-row single moonranger-stress-figure"><figure class="figure-card wide"><img src="/assets/images/portfolio/moonranger-wheel-random-vibe-stress.png" alt="Wheel-bracket random-vibration stress result"><figcaption>Wheel Bracket — Stress Peak Under Launch Vibration</figcaption></figure></div>

### EMI Mitigation

Split-core ferrite beads were added to selected rover wiring to mitigate EMI. The ferrite was an off-the-shelf electrical component, which raised a mechanical eyebrow: **what happens to it during launch, and how do we secure it?**

I designed a close-fitting retention enclosure and mounting interface, checked interference inside the avionics volume, and analyzed its modal response. That completed the mechanical design portion of the mitigation.

<div class="figure-row two"><figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-split-core-ferrite.png" alt="Split-core ferrite"><figcaption>COTS Split-Core Ferrite Bead</figcaption></figure><figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-ferrite-retention-cad.png" alt="Ferrite mount CAD"><figcaption>Ferrite Bead Mount</figcaption></figure></div>

<div class="figure-row single"><figure class="figure-card wide"><img src="/assets/images/portfolio/moonranger-beadmount-analysis.png" alt="Ferrite bead mount modal analysis"><figcaption>Ferrite Bead Assembly — Modal Analysis</figcaption></figure></div>

### Drop Deployment Test

Five HDRMs secure MoonRanger to the Firefly lander during transit. A representative Earth drop test is needed to verify their release. The plan calls for flight-representative equipment and loads, with little room for error: the manufacturer discourages resetting the HDRMs more than once.

<div class="figure-row single"><figure class="figure-card wide"><img src="/assets/images/portfolio/moonranger-dropbot.png" alt="DropBot CAD"><figcaption>DropBot Faux-Rover — One-Sixth Mass</figcaption></figure></div>

**DropBot** is a surrogate designed to reproduce MoonRanger's center of mass, bounding geometry, and HDRM interface loads at **one-sixth the mass**. It uses bent **5052 aluminum sheet metal**, aluminum honeycomb, 3D-printed parts, and epoxied potted inserts in the top plane.

<div class="figure-row single"><figure class="figure-card wide"><img src="/assets/images/portfolio/moonranger-potted-inserts.png" alt="Potted insert CAD and drawings"><figcaption>DropBot Potted Inserts Drawings</figcaption></figure></div>

Maintaining the top honeycomb plane's HDRM mating geometry within tolerance is no joke: **more than 1 mm of misalignment** would invalidate the test. I wrote the detailed deployment procedure defining what happens, how, and when. That work exposed the need for an alignment fixture, shown in red in the test-plan excerpt.

<div class="figure-row single"><figure class="figure-card wide"><img src="/assets/images/portfolio/moonranger-drop-test-plan.png" alt="Drop deployment test plan excerpt"><figcaption>Drop Deployment Test Plan — Excerpt</figcaption></figure></div>

The fixture design, test plan, and DropBot hardware laid the groundwork for this crucial verification. **The drop test is not presented here as completed.**
