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
      <p class="story-eyebrow">SPACE HARDWARE · MECHANICAL LEAD</p>
      <h2>Getting to the Moon in one piece.</h2>
      <p>MoonRanger is slated to ride to the lunar surface with Firefly Aerospace. Unfortunately, rockets are not known for treating delicate hardware delicately.</p>
      <p>As Mechanical Lead, I worked on three kinds of trouble: wheels that must survive launch, EMI hardware that must stay put, and a release mechanism that has to release when the time comes. The job was to analyze the risk, change the design, produce drawings, and prepare for verification.</p>
      <p>It's a lot of acronyms. The hardware itself is more interesting.</p>
    </div>
    <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-wheel-bracket-first-mode.gif" alt="First bending mode of MoonRanger wheel bracket predicted by ANSYS" loading="lazy"><figcaption>Redesigned wheel-bracket first mode: 144.68 Hz in the finalized analysis.</figcaption></figure>
  </div>
  <div class="story-stats" aria-label="MoonRanger analysis and verification figures">
    <div><span>DESIGN REQUIREMENT</span><strong>100 Hz</strong><small>Minimum first mode for key structures</small></div>
    <div><span>MODEL CORRELATION</span><strong>~0.6%</strong><small>Difference from test-backed baseline</small></div>
    <div><span>VERIFICATION</span><strong>3 workstreams</strong><small>Wheel, EMI retention, deployment</small></div>
  </div>

  <section class="story-section">
    <div class="editorial-row">
      <div class="editorial-copy">
        <p class="story-eyebrow">01 / STRUCTURAL FEA</p>
        <h2>Make the wheel survive launch.</h2>
        <p>The rover’s wheel grew from 190 to 220 mm, bringing new ground-pressure and packaging requirements. Before trusting the redesign, I rebuilt the original ANSYS wheel model: it predicted a first mode of 154.23 Hz, compared with 155.1 Hz from the previous test-backed result. A reassuring ~0.6% difference.</p>
        <p>Then I changed the wheel and bracket, using equivalent materials for complex motor and bearing masses, fixed supports at the three wheel-bracket fasteners, locally refined meshing, and Falcon 9 random-vibration loads.</p>
      </div>
      <div class="editorial-figure-stack">
        <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-wheel-baseline-modal.png" alt="190 mm baseline modal result" loading="lazy"><figcaption>190 mm baseline: 154.23 Hz.</figcaption></figure>
        <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-wheel-new-modal.png" alt="New 220 mm wheel modal result" loading="lazy"><figcaption>Redesigned 220 mm wheel: 139.34 Hz in the initial model.</figcaption></figure>
      </div>
    </div>
    <div class="editorial-row editorial-row--reverse editorial-row--continuation">
      <div class="editorial-copy">
        <h3>When the stress plot points at the fasteners.</h3>
        <p>Random-vibration analysis flagged a <strong>304 MPa</strong> stress peak at the bracket mounting interface. After checking it wasn't just a meshing artifact, I treated it as a real joint-level design concern: the peak exceeded nominal 6061-T6 aluminum yield strength.</p>
        <p>I revised the joint with a washer to distribute force, integrated the assembly in CAD, produced drawings using ASME Y14.5 GD&amp;T, and sourced five wheels. Analysis is useful only if it changes the hardware.</p>
      </div>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-wheel-random-vibe-stress.png" alt="Random-vibration stress concentration near bracket fasteners" loading="lazy"><figcaption>Launch vibration exposed a stress concentration at the mounting joint.</figcaption></figure>
    </div>
  </section>

  <section class="story-section">
    <div class="editorial-row">
      <div class="editorial-copy">
        <p class="story-eyebrow">02 / EMI PACKAGING</p>
        <h2>Make sure the EMI fix doesn't become a launch problem.</h2>
        <p>Electrical engineers added split-core ferrite beads to selected wiring to cut electromagnetic interference. My concern was more mechanical: how do you keep those ferrites attached through launch without interfering with the electronics package?</p>
        <p>I designed a retention enclosure, checked the fit inside the rover’s avionics volume, and analyzed its modal response against the structural requirement.</p>
      </div>
      <div class="editorial-figure-stack">
        <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-ferrite-retention-cad.png" alt="Ferrite bead retention mount CAD" loading="lazy"><figcaption>The close-fitting mechanical retention mount.</figcaption></figure>
        <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-beadmount-analysis.png" alt="Modal analysis of ferrite retention assembly" loading="lazy"><figcaption>Ferrite retention assembly — modal analysis.</figcaption></figure>
      </div>
    </div>
    <figure class="editorial-detail"><img src="/assets/images/portfolio/moonranger-split-core-ferrite.png" alt="Off-the-shelf ferrite core" loading="lazy"><figcaption>A perfectly innocent electrical component, until you consider launch loads.</figcaption></figure>
  </section>

  <section class="story-section">
    <div class="editorial-row editorial-row--reverse">
      <div class="editorial-copy">
        <p class="story-eyebrow">03 / DEPLOYMENT TEST</p>
        <h2>And then make sure it lets go.</h2>
        <p>Five hold-down and release mechanisms (HDRMs) secure MoonRanger to the lander. A representative Earth drop test is needed to verify their release, and the manufacturer discourages resetting them more than once. That makes test planning unusually unforgiving.</p>
        <p>I designed <strong>DropBot</strong>, a one-sixth-mass surrogate preserving critical bounding geometry, center of mass, and HDRM interface loads, using bent 5052 aluminum sheet, honeycomb, printed parts, and potted inserts.</p>
      </div>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-dropbot.png" alt="DropBot surrogate lunar rover CAD" loading="lazy"><figcaption>DropBot — a representative surrogate for deployment testing.</figcaption></figure>
    </div>
    <div class="editorial-row editorial-row--continuation">
      <div class="editorial-copy">
        <h3>One millimeter matters.</h3>
        <p>More than 1 mm of misalignment at the honeycomb HDRM mating plane could invalidate the test. I documented the deployment sequence and its setup requirements; the actual drop test is not presented here as completed.</p>
        <p class="story-endnote">The goal is simple: fly hardware that survives the ride, functions when called upon, and doesn't leave the team guessing why.</p>
      </div>
      <div class="editorial-figure-stack">
        <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-potted-inserts.png" alt="Potted insert design details" loading="lazy"><figcaption>Potted inserts set the top-panel interface geometry.</figcaption></figure>
        <figure class="editorial-figure"><img src="/assets/images/portfolio/moonranger-drop-test-plan.png" alt="Deployment test plan excerpt with red alignment fixture" loading="lazy"><figcaption>The detailed test plan highlighted the need for an alignment fixture.</figcaption></figure>
      </div>
    </div>
  </section>
</div>
