---
layout: post
permalink: /projects/mobile-robots/
order: 6
title: "Quadrotor Control: 3D Motion Planning"
description: "Compared two ways to keep a quadrotor out of cave walls: dynamics-aware Hybrid A* versus RRT* with minimum-snap smoothing."
skills:
  - Python
  - Motion planning
  - RRT*
  - Hybrid A*
  - Trajectory generation
  - Open3D
main-image: "/cover.png"
---

<div class="story-project editorial-project quadrotor-story">
  <div class="story-intro">
    <div class="story-intro-copy">
      <p class="story-eyebrow">3D MOTION PLANNING · QUADROTORS</p>
      <h2>Hybrid A* vs. RRT* with Minimum-Snap Smoothing</h2>
      <h3>Who cares?</h3>
      <p>Quadrotors need paths that are collision-free and physically reasonable to fly. A geometric path can avoid obstacles but still be too sharp, too close, or too hard to track.</p>
      <p><strong>Objective:</strong> compare two planning philosophies: <strong>dynamics by construction</strong> (Hybrid A* with motion primitives) versus <strong>dynamics by enforcement</strong> (RRT* followed by minimum-snap smoothing).</p>
    </div>
    <figure class="editorial-figure"><img src="/assets/images/portfolio/mobrob-easypathAstar.png" alt="Hybrid A-star trajectory through a three dimensional simulated cave" loading="lazy"><figcaption>Hybrid A* path in the easy cave environment.</figcaption></figure>
  </div>
  <section class="story-section">
    <p class="story-eyebrow">EXPERIMENT SETUP</p>
    <h2>What did we do?</h2>
    <p>We built three Open3D environments and converted them into 3D occupancy grids.</p>
    <figure class="editorial-figure editorial-figure--wide editorial-figure--environments"><img src="/assets/images/portfolio/mobrob-environments.png" alt="Easy, medium, and hard Open3D obstacle environments" loading="lazy"><figcaption>Obstacle complexity increased from an open cave to a dense forest and then a complicated cave.</figcaption></figure>
    <div class="editorial-row editorial-row--reverse editorial-row--feature editorial-row--compact">
      <div class="editorial-copy">
        <h3>Hybrid A*</h3>
        <p>The Hybrid A* planner generated forward arcs, collision-checked them, and scored the remaining options using travel, climb, steering, heading error, clearance, and progress terms.</p>
      </div>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/mobrob-motionprimatives.png" alt="Hybrid A-star motion primitive arc candidates" loading="lazy"><figcaption>Motion primitives show the local feasible arcs evaluated from each state.</figcaption></figure>
    </div>
    <div class="editorial-copy editorial-copy--wide">
      <h3>RRT* + minimum snap</h3>
      <p>The RRT* + minimum snap planner first generated waypoints, then fit a polynomial trajectory to reduce snap and improve smoothness.</p>
      <p><strong>Evaluation metrics:</strong> path length, simulation time, smoothness, and average obstacle clearance.</p>
    </div>
  </section>
  <section class="story-section">
    <p class="story-eyebrow">RESULTS</p>
    <h2>What is the answer?</h2>
    <p>The comparison showed that smoother-looking trajectories were not automatically safer. RRT* + minimum snap was fast and smooth, but it sometimes cut close to obstacles. Hybrid A* kept dynamics inside the search, but needed more tuning and computation.</p>
    <div class="editorial-figure-pair editorial-figure-pair--charts" aria-label="Quadrotor planning time and obstacle clearance comparison graphs">
      <figure class="editorial-figure"><img src="/assets/images/portfolio/mobrob-TimevsPathLength.png" alt="Time versus path length planning results chart" loading="lazy"><figcaption>Simulation time and path length across the planning methods.</figcaption></figure>
      <figure class="editorial-figure"><img src="/assets/images/portfolio/mobrob-Average_Clearance.png" alt="Average obstacle clearance results chart" loading="lazy"><figcaption>Average obstacle clearance across the three environments.</figcaption></figure>
    </div>
  </section>
  <section class="story-section">
    <p class="story-eyebrow">CONCLUSIONS</p>
    <h2>Takeaway</h2>
    <p>This project worked as a planning comparison, not as a final flight controller. The useful result was identifying when each pipeline fails: Hybrid A* can become expensive when the primitive set is large, while RRT* + minimum snap can produce a visually smooth trajectory that loses clearance in tight environments.</p>
    <p>The unique part was comparing plan-with-dynamics-built-in against plan-first, smooth-later using the same environments and metrics. For real quadrotor navigation, the next step would be connecting the planner to tracking control and testing whether the simulated smoothness actually improves closed-loop flight behavior.</p>
  </section>
</div>
