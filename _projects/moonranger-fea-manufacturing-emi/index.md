---
layout: post
order: 5
title: "MoonRanger: FEA, Manufacturing, and EMI Mitigation"
description: "Correlated launch-load FEA, released manufacturable rover hardware, and packaged ferrite suppression so the electrical fix could survive outside the lab."
skills:
  - Structural FEA
  - Modal and random vibration analysis
  - SolidWorks and GD&T
  - Design verification
  - Flight hardware integration
  - EMI mitigation
main-image: "/cover.jpg"
---

## Introduction

**MoonRanger does not get a gentle ride to the lunar surface.** Wheels and camera hardware have to survive launch loading, fit within a tightly constrained rover, and remain manufacturable. Even a small electrical fix—such as adding ferrite suppression to a cable—has to be retained like flight hardware rather than left to rattle around like a lab accessory.

I worked across that full hardware chain: **model the risk, make the design decision, release the part, and integrate the result.**

**Objectives:**

- Reconstruct and correlate the previous wheel model before analyzing a larger redesign.
- Evaluate the new wheel under modal and launch random-vibration loading.
- Compare PEI and aluminum camera shrouds across six launch acceleration cases.
- Determine whether the two-bolt shroud interface needed a third mounting point.
- Convert updated geometry into fabrication-ready CAD, drawings, and vendor packages.
- Mechanically package ferrite cores used for EMI mitigation inside the rover avionics volume.

<div class="figure-row two ferrite-intro-row">
  <figure class="figure-card compact">
    <img src="/assets/images/portfolio/moonranger-ferrite-retention-cad.png" alt="MoonRanger ferrite retention enclosure CAD">
    <figcaption>A custom retention enclosure turned an off-the-shelf ferrite core into controlled rover hardware.</figcaption>
  </figure>
  <figure class="figure-card compact">
    <img src="/assets/images/portfolio/moonranger-ferrite-installed-cad.png" alt="Ferrite retention assembly packaged inside the MoonRanger avionics structure">
    <figcaption>Packaging was checked against surrounding electronics, structure, fasteners, and service access.</figcaption>
  </figure>
</div>

## Methods

### Wheel Model Correlation and Redesign

Before trusting the redesigned wheel model, I rebuilt the previous **190 mm wheel** analysis and compared its first natural frequency with earlier experimentally corroborated data. The reconstructed model predicted **154.23 Hz**, versus **155.1 Hz** from the prior test-backed result—a difference of roughly **0.6%**.

The analysis workflow used:

- Custom equivalent materials for the actuator and bearing.
- Fixed supports at the three wheel-bracket fastener interfaces.
- Suppressed bolts and electrical details that did not control the global response.
- A **10 mm global mesh** with local refinement around mounting holes.
- Falcon 9 random-vibration acceleration inputs applied through the launch-critical axis.

<div class="figure-row two moonranger-modal-pair">
  <figure class="figure-card">
    <img src="/assets/images/portfolio/moonranger-wheel-baseline-modal.png" alt="Modal FEA of the previous 190 millimeter MoonRanger wheel">
    <figcaption>The reconstructed baseline produced a 154.23 Hz first mode, closely matching the prior 155.1 Hz result.</figcaption>
  </figure>
  <figure class="figure-card">
    <img src="/assets/images/portfolio/moonranger-wheel-new-modal.png" alt="Modal FEA of the redesigned 220 millimeter MoonRanger wheel">
    <figcaption>Increasing the wheel diameter to 220 mm lowered the first mode to 139.34 Hz while preserving the dominant deformation pattern.</figcaption>
  </figure>
</div>

I then ran the redesigned **220 mm wheel** through random-vibration loading. The global model concentrated its highest reported stress—approximately **304 MPa**—at the constrained wheel-bracket mounting interface. Because that exceeded the nominal yield strength of 6061-T6 aluminum, I treated the result as a **joint-level verification flag**, not as a convenient pass/fail answer. The hotspot focused the next review on constraint assumptions, local load transfer, mesh sensitivity, and the bracket geometry.

<div class="figure-row single moonranger-stress-figure">
  <figure class="figure-card wide">
    <img src="/assets/images/portfolio/moonranger-wheel-random-vibe-stress.png" alt="Random vibration stress concentrated at the redesigned MoonRanger wheel mounting interface">
    <figcaption>The mounting interface—not the wheel rim or spokes—controlled the reported peak stress in the global random-vibration model.</figcaption>
  </figure>
</div>

### Camera-Shroud Material and Mounting Trade

The camera shroud was evaluated across **six combinations of forward, aft, and lateral acceleration**. I translated the launch-frame loads into the rover coordinate system, then compared PEI and 6061-T6 aluminum using the same two-bolt mounting architecture.

<div class="figure-row single moonranger-orientation">
  <figure class="figure-card wide">
    <img src="/assets/images/portfolio/moonranger-launch-orientation.png" alt="Launch vehicle and MoonRanger coordinate frame orientation used for camera shroud load cases">
    <figcaption>Launch directions were mapped into the rover frame before applying the six quasi-static acceleration cases.</figcaption>
  </figure>
</div>

<div class="figure-row two shroud-geometry-row">
  <figure class="figure-card compact">
    <img src="/assets/images/portfolio/moonranger-shroud-two-bolt-cad.jpg" alt="MoonRanger camera shroud with its two mounting locations">
    <figcaption>The study tested whether the existing two-point interface could support the updated camera enclosure without adding unnecessary hardware.</figcaption>
  </figure>
  <figure class="figure-card compact">
    <img src="/assets/images/portfolio/moonranger-wheel-manufacturing-render.png" alt="SolidWorks render of the redesigned MoonRanger wheel">
    <figcaption>The wheel redesign was carried beyond analysis into a manufacturable 220 mm geometry and controlled drawing package.</figcaption>
  </figure>
</div>

The worst PEI case produced **162.0 kPa** equivalent stress and **7.3 µm** directional deformation. The worst aluminum case produced **749.9 kPa** and **2.5 µm**. Aluminum was stiffer, but both materials remained far below yield in the modeled static launch cases.

<div class="figure-row two shroud-stress-pair">
  <figure class="figure-card">
    <img src="/assets/images/portfolio/moonranger-shroud-pei-stress.png" alt="PEI camera shroud equivalent stress result">
    <figcaption><strong>PEI:</strong> lower stress and greater deformation, with the worst directional movement still only 7.3 µm.</figcaption>
  </figure>
  <figure class="figure-card">
    <img src="/assets/images/portfolio/moonranger-shroud-aluminum-stress.png" alt="Aluminum camera shroud equivalent stress result">
    <figcaption><strong>Aluminum:</strong> greater stiffness, but strength margin was excessive for the evaluated load cases.</figcaption>
  </figure>
</div>

The useful conclusion was that **strength did not govern the material trade**. The existing two-bolt interface was sufficient for the modeled static loads, so a third fastener was not justified by stress or deformation alone. That let thermal isolation, camera alignment, mass, and manufacturability drive the decision instead.

### Manufacturing Release

Analysis only mattered if the hardware could be built. I converted the wheel redesign into fabrication-ready CAD and a controlled technical drawing that specified:

- 6061-T6 aluminum.
- ASME Y14.5 geometric-dimensioning conventions.
- Machining radii and spoke-root requirements.
- Deburring and edge treatment.
- Chemical-conversion coating requirements.
- Critical dimensions, sections, tolerances, and revision control.

I also coordinated design reviews, vendor quotations, procurement, and delivery schedules for the wheel, camera shroud, and deployment test hardware. The controlled drawing is intentionally not reproduced here; the portfolio shows the released geometry without publishing proprietary dimensions or title-block information.

### EMI-Mitigation Packaging

Split-core ferrites were added to selected rover wiring as part of an EMI-mitigation strategy. The ferrite itself was an electrical component; my problem was mechanical: **keep it located under vibration, avoid damaging the cable, preserve routing and access, and fit it into an already crowded volume.**

I designed a close-fitting retention enclosure and mounting interface around the selected ferrite, then checked the assembly in the full avionics CAD. This completed the mechanical portion of the mitigation—turning a component that works on a bench into something that could be installed, serviced, and retained on the rover.

<div class="figure-row three ferrite-gallery">
  <figure class="figure-card compact">
    <img src="/assets/images/portfolio/moonranger-split-core-ferrite.png" alt="Commercial split-core ferrite used for MoonRanger EMI mitigation">
    <figcaption>The off-the-shelf split-core ferrite provided the electrical function but no rover-specific retention.</figcaption>
  </figure>
  <figure class="figure-card compact">
    <img src="/assets/images/portfolio/moonranger-ferrite-retention-cad.png" alt="CAD of the custom ferrite retention enclosure">
    <figcaption>The custom enclosure captured the ferrite and controlled the cable path without making the assembly permanent.</figcaption>
  </figure>
  <figure class="figure-card compact">
    <img src="/assets/images/portfolio/moonranger-ferrite-installed-cad.png" alt="Ferrite enclosure integrated into the MoonRanger avionics CAD">
    <figcaption>Full-assembly packaging verified clearance, mounting, and service access before hardware integration.</figcaption>
  </figure>
</div>

## Results

<div class="metric-grid">
  <div class="metric-card"><strong>0.6%</strong><span>baseline modal difference from prior test-backed data</span></div>
  <div class="metric-card"><strong>139.34 Hz</strong><span>first mode of the redesigned 220 mm wheel</span></div>
  <div class="metric-card"><strong>6 cases</strong><span>camera-shroud launch-load combinations evaluated</span></div>
  <div class="metric-card"><strong>2 bolts</strong><span>sufficient for the modeled shroud static loads</span></div>
</div>

The work moved several pieces of hardware from uncertain requirements toward release and integration:

- Correlated the baseline wheel model closely with previous experimentally supported modal data.
- Identified the redesigned wheel bracket as the critical location requiring additional joint-level verification.
- Demonstrated substantial static strength margin for both PEI and aluminum camera shrouds.
- Removed the third shroud fastener from consideration based on the modeled stress and deformation results.
- Released manufacturable wheel geometry with material, tolerance, coating, and inspection requirements.
- Packaged ferrite suppression as retained, serviceable hardware within the rover avionics architecture.

## Discussion

Good FEA is not a rainbow plot; it is a decision about **what can be released, what should change, and what still deserves suspicion**.

The baseline wheel correlation gave confidence in the global modeling approach, while the redesigned wheel exposed a mounting-interface hotspot that should not be waved away. The shroud study removed strength from the material decision and let thermal isolation, stiffness, alignment, and manufacturing do the actual engineering. The ferrite enclosure completed the same pattern at a smaller scale: an electrical mitigation became useful only after it could be packaged, installed, inspected, and serviced.

Together, the work covered the hardware lifecycle emphasized in flight programs: **requirements, interfaces, analysis, technical review, manufacturing release, integration, and verification-minded iteration.**
