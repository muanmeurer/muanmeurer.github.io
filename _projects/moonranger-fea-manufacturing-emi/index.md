---
layout: post
permalink: /projects/moonranger-fea-manufacturing-emi/
order: 2
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

<div class="story-project editorial-project moonranger-structures-story">
  <div class="story-intro">
    <div class="story-intro-copy">
      <p class="story-eyebrow">MECHANICAL LEAD · NASA MOONRANGER</p>
      <h2>CAD, FEA, EMI, and Validation</h2>
      <p>I serve as Mechanical Lead for the MoonRanger rover under Red Whittaker and Heather Jones. I know the title is 75% vague acronyms, so please keep reading. It'll make sense, I swear.</p>
      <h3>What's the point?</h3>
      <p>MoonRanger is planned to fly as a payload with Firefly Aerospace in 2029, and it won't get a gentle ride to the lunar surface. Though I've analyzed whether MoonRanger could overheat during transit, launch vibrations pose another risk: they could shake critical hardware apart. Even after surviving launch, what if the hold-down and release mechanisms (HDRMs) fail? Or electromagnetic interference (EMI) compromises sensor data?</p>
      <p>Aerospace has taught me that every extra component or line of errant code can threaten a mission that took years and millions of dollars to build. I was tasked with putting several of these risks to bed: model the problem, make the design decision, release the drawings, and prepare the hardware for verification.</p>
    </div>
    
  </div>
  <figure class="editorial-figure editorial-figure--wide editorial-figure--hero-wheel"><img src="/assets/images/portfolio/moonranger-wheel-bracket-first-mode.gif" alt="Animated ANSYS first-mode deformation of finalized MoonRanger wheel bracket" loading="lazy"><figcaption>Finalized wheel bracket — first mode at 144.68 Hz.</figcaption></figure>
  <div class="story-stats" aria-label="MoonRanger design requirements and results">
    <div><span>MINIMUM FIRST MODE</span><strong>100 Hz</strong><small>Key structures under launch loading</small></div>
    <div><span>MODEL CORRELATION</span><strong>~0.6%</strong><small>Against earlier test-backed data</small></div>
    <div><span>WORKSTREAMS</span><strong>3</strong><small>Wheel design, EMI retention, deployment test</small></div>
  </div>
  <section class="story-section">
    <p class="story-eyebrow">SCOPE</p>
    <h2>Objectives</h2>
    <ul>
      <li><strong>MoonRanger CAD &amp; FEA:</strong> Revise wheel and camera-shroud geometry for new ground-pressure and occlusion requirements; correlate the old wheel model; verify the redesigned wheel under modal and random-vibration loading against the 100 Hz first-mode requirement; release drawings and procure hardware.</li>
      <li><strong>EMI Mitigation:</strong> Secure ferrite cores within the rover avionics volume and analyze the mount against the 100 Hz modal requirement.</li>
      <li><strong>HDRM Drop Deployment Test:</strong> Design a one-sixth-mass DropBot surrogate with representative bounding geometry and center of mass, and write a detailed deployment test plan.</li>
    </ul>
  </section>
  <section class="story-section">
    <div class="editorial-row editorial-row--feature">
      <div class="editorial-copy">
        <p class="story-eyebrow">01 / STRUCTURAL FEA</p>
        <h2>Wheel Model Correlation and Redesign</h2>
        <p>After selecting a larger, wider 220 mm wheel, I rebuilt the previous 190 mm wheel analysis and compared its first natural frequency with earlier experimentally corroborated data. The reconstructed model yielded 154.23 Hz, versus 155.1 Hz from the prior test-backed result: a difference of roughly 0.6%.</p>
        <p>The ANSYS workflow used custom equivalent materials for irregular mass distributions in the wheel actuator and bearing; fixed supports at three wheel-bracket fastener interfaces; a 10 mm global mesh with local refinement around mounting holes; and Falcon 9 random-vibration acceleration inputs along the launch-critical axis.</p>
      </div>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-wheel-manufacturing-render.png" alt="CAD rendering of the redesigned MoonRanger wheel" loading="lazy"><figcaption>Redesigned MoonRanger wheel.</figcaption></figure>
    </div>
    <div class="editorial-figure-pair editorial-figure-pair--modal editorial-figure-pair--wheel" aria-label="Original and redesigned MoonRanger wheel modal analyses">
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-wheel-baseline-modal.png" alt="190 mm wheel modal analysis" loading="lazy"><figcaption>190 mm wheel baseline: 154.23 Hz first mode.</figcaption></figure>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-wheel-new-modal.png" alt="220 mm wheel modal analysis" loading="lazy"><figcaption>220 mm redesigned wheel: 139.34 Hz first mode.</figcaption></figure>
    </div>
    <div class="editorial-row editorial-row--reverse editorial-row--feature editorial-row--compact">
      <div class="editorial-copy">
        <p>I then ran the redesigned wheel through random-vibration loading. The highest reported stress, 304 MPa, occurred at the constrained wheel-bracket mounting interface. After checking that this wasn't a mesh singularity, I treated the result as a joint-level verification flag.</p>
        <p>It exceeded the nominal yield strength of 6061-T6 aluminum, so I revised the design with a washer to distribute force. I integrated the revised module into the rover CAD assembly, made the shop drawing using ASME Y14.5 GD&amp;T, and sourced five new wheels.</p>
      </div>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-wheel-random-vibe-stress.png" alt="Random-vibration stress field of wheel bracket" loading="lazy"><figcaption>Wheel-bracket stress peak under launch vibration.</figcaption></figure>
    </div>
  </section>
  <section class="story-section">
    <div class="editorial-row editorial-row--feature">
      <div class="editorial-copy">
        <p class="story-eyebrow">02 / EMI MITIGATION</p>
        <h2>EMI Mitigation</h2>
        <p>Split-core ferrite beads were added to selected rover wiring to mitigate EMI. The ferrite was an off-the-shelf electrical component, which raised a mechanical eyebrow: what happens to it during launch, and how do we secure it?</p>
        <p>I designed a close-fitting retention enclosure and mounting interface, checked interference inside the avionics volume, and analyzed its modal response. That completed the mechanical design portion of the mitigation.</p>
      </div>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-ferrite-retention-cad.png" alt="CAD of ferrite retention mount" loading="lazy"><figcaption>Mechanical retention mount for the ferrite cores.</figcaption></figure>
    </div>
    <div class="editorial-figure-pair editorial-figure-pair--mixed editorial-figure-pair--ferrite" aria-label="Ferrite core and retention mount modal analysis">
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-split-core-ferrite.png" alt="Split-core ferrite bead" loading="lazy"><figcaption>COTS split-core ferrite bead.</figcaption></figure>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-beadmount-analysis.png" alt="Ferrite bead assembly modal analysis" loading="lazy"><figcaption>Ferrite bead assembly — modal analysis.</figcaption></figure>
    </div>
  </section>
  <section class="story-section">
    <div class="editorial-row editorial-row--reverse editorial-row--feature">
      <div class="editorial-copy">
        <p class="story-eyebrow">03 / DROP DEPLOYMENT TEST</p>
        <h2>Drop Deployment Test</h2>
        <p>Five HDRMs secure MoonRanger to the Firefly lander during transit. A representative Earth drop test is needed to verify their release. The plan calls for flight-representative equipment and loads, with little room for error: the manufacturer discourages resetting the HDRMs more than once.</p>
        <p>I designed <strong>DropBot</strong>, a one-sixth-mass surrogate preserving critical bounding geometry, center of mass, and HDRM interface loads, using bent 5052 aluminum sheet, honeycomb, printed parts, and potted inserts.</p>
      </div>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-dropbot.png" alt="DropBot CAD and components" loading="lazy"><figcaption>DropBot surrogate for Earth deployment testing.</figcaption></figure>
    </div>
    <p>Maintaining the top honeycomb plane's HDRM mating geometry within tolerance is no joke: more than 1 mm of misalignment would invalidate the test. I wrote the detailed deployment procedure defining what happens, how, and when. That work exposed the need for an alignment fixture, shown in red in the test-plan excerpt.</p>
    <div class="editorial-figure-pair editorial-figure-pair--drop" aria-label="DropBot insert details and deployment procedure">
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-potted-inserts.png" alt="DropBot potted inserts and drawings" loading="lazy"><figcaption>DropBot potted inserts drawings.</figcaption></figure>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-drop-test-plan.png" alt="Drop deployment test plan with alignment fixture" loading="lazy"><figcaption>Deployment test plan — alignment fixture highlighted in red.</figcaption></figure>
    </div>
    <p>The fixture design, test plan, and DropBot hardware laid the groundwork for this crucial verification. The drop test is not presented here as completed.</p>
  </section>
</div>
