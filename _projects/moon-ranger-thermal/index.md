---
layout: post
order: 4
title: "MoonRanger: Thermal Analysis"
description: "Modeled MoonRanger inside its transit garage to find the line between useful thermal buffering and a very expensive space oven."
skills:
  - Thermal analysis
  - Space systems
  - Thermal Desktop
  - Python simulation
  - Design documentation
  - Margin assessment
main-image: "/cover.png"
---

## Introduction

**MoonRanger has to survive cislunar transit, landing, and lunar surface operations without exceeding tight avionics and battery limits.** The newer mission concept places the rover inside a semi-enclosed thermal garage during transit, which changes the problem from direct radiation to deep space into a buffered enclosure with internal radiation and limited conductive leakage.

**Objective:** determine whether the garage protects the rover or traps enough heat to become a risk.

## Methods

I built a **finite-difference Thermal Desktop model** of the rover-in-garage transit configuration.

- Modeled a simplified **1 m × 1 m × 0.5 m** garage enclosure.
- Applied deep-space radiation, solar loading, and lander/HDRM conductive paths.
- Compared powered checkout, charging, and combined duty-cycle cases.
- Tracked whether avionics stayed within a conservative **-30 °C to 60 °C** allowable range.

<div class="figure-row two thermal-video-pair">
  <figure class="figure-card video-card">
    <video class="project-video card-video" controls muted playsinline poster="/assets/images/portfolio/moonranger-orbit-poster.png">
      <source src="/assets/videos/moonranger-orbit.mp4" type="video/mp4">
    </video>
    <figcaption>Orbit setup represented solar exposure, deep-space radiation, and lander orientation during cislunar transit.</figcaption>
  </figure>
  <figure class="figure-card video-card">
    <video class="project-video card-video" controls muted playsinline poster="/assets/images/portfolio/moonranger-animation-poster.png">
      <source src="/assets/videos/moonranger-animation.mp4" type="video/mp4">
    </video>
    <figcaption>Transient results showed how heat accumulated and redistributed inside the garage volume over time.</figcaption>
  </figure>
</div>

<div class="figure-row two">
  <figure class="figure-card compact thermal-diagram"><img src="/assets/images/portfolio/Screenshot 2026-05-02 181733.png" alt="MoonRanger hot and cold transit diagrams"><figcaption>Hot and cold transit diagrams framed the garage position relative to the Sun, Earth, Moon, and lander.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-heatloads.png" alt="MoonRanger heat load diagram"><figcaption>Heat-load inputs connected powered checkouts, battery charging, and avionics dissipation to thermal response.</figcaption></figure>
</div>

## Results

The garage **did not cause runaway heating when operations were spaced realistically**. It moderated temperature swings and allowed periodic powered activities, but it became unsafe under compressed charging schedules.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/moonranger-avionics_allowable_heats.png" alt="MoonRanger avionics allowable heat table"><figcaption>Allowable temperatures turned model output into direct pass/fail engineering constraints.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/moonranger-avionics-heatgraph.png" alt="MoonRanger avionics heat graph"><figcaption>A realistic 1-hour charge / 15-hour rest cadence stayed below the 60 °C conservative limit.</figcaption></figure>
</div>

Key findings:

- **Cold survival:** the garage was helpful, but not strictly necessary because heaters could protect the rover.
- **Worst charging case:** a compressed 1:3 charge/rest schedule overheated the avionics and reached unsafe temperatures.
- **Realistic cadence:** one hour of charging followed by 15 hours of rest over a 16-day case peaked around **36 °C**.
- **Operational result:** periodic check-ins every roughly **5.5 days** remained thermally feasible.

## Discussion

The analysis **worked because it answered the design question with an operational rule**, not just a temperature plot. The garage is not required as a cold-survival device, but it is valuable because it reduces oscillations, lowers heater dependence, and makes powered transit check-ins easier to schedule safely.

The unique part was showing that the same enclosure can be **good or bad depending on cadence**. If charging is compressed, the garage traps heat and becomes dangerous. If charging is spaced realistically, the garage becomes a thermal buffer and stays well below the conservative avionics limit. The next step is replacing the simplified box with flight-like garage geometry, Firefly trajectory inputs, real conductive paths, and TVAC validation.
