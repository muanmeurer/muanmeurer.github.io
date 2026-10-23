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
      <p class="story-eyebrow">MOTION PLANNING · AUTONOMY</p>
      <h2>A smooth path isn't necessarily a safe one.</h2>
      <p>A quadrotor can have a beautiful-looking path that it physically cannot fly—or one that threads an obstacle a little too enthusiastically.</p>
      <p>We compared two approaches to 3D navigation: <strong>Hybrid A*</strong>, which accounts for dynamics during planning, and <strong>RRT* with minimum-snap smoothing</strong>, which finds a geometric path first and smooths it afterward.</p>
    </div>
    <figure class="editorial-figure"><img src="/assets/images/portfolio/mobrob-environments.png" alt="Three increasingly difficult simulated 3D obstacle environments" loading="lazy"><figcaption>Three Open3D test environments, from an open cave to a dense forest and tighter cave.</figcaption></figure>
  </div>

  <section class="story-section">
    <div class="editorial-row editorial-row--reverse">
      <div class="editorial-copy">
        <p class="story-eyebrow">PLAN WITH THE DYNAMICS BUILT IN</p>
        <h2>Hybrid A*: Think before you turn.</h2>
        <p>We built three environments in Open3D and converted them into occupancy grids. Hybrid A* expanded candidate arcs and scored each for travel, climb, steering, heading error, clearance, and goal progress.</p>
        <p>In other words, the planner considers the motion the quadrotor can actually make while it searches for a way through the obstacles.</p>
      </div>
      <div class="editorial-figure-stack">
        <figure class="editorial-figure"><img src="/assets/images/portfolio/mobrob-easypathAstar.png" alt="Hybrid A-star planned path" loading="lazy"><figcaption>Hybrid A*: a dynamically informed route through the easy environment.</figcaption></figure>
        <figure class="editorial-figure"><img src="/assets/images/portfolio/mobrob-motionprimatives.png" alt="Motion primitive arcs for quadrotor planning" loading="lazy"><figcaption>Motion primitives restrict the search to plausible local movements.</figcaption></figure>
      </div>
    </div>
  </section>

  <section class="story-section">
    <div class="editorial-row">
      <div class="editorial-copy">
        <p class="story-eyebrow">PLAN FIRST, SMOOTH LATER</p>
        <h2>RRT*: The scenic route to smoothness.</h2>
        <p>RRT* generated candidate waypoints and minimum-snap polynomials smoothed the trajectory. RRT* with smoothing was fast and produced clean trajectories, but could shave away obstacle clearance.</p>
        <p>Hybrid A* respected its motion model as it searched, at the cost of additional tuning and computation. We compared path length, planning time, smoothness, and clearance under the same environments.</p>
      </div>
      <div class="editorial-figure-stack">
        <figure class="editorial-figure"><img src="/assets/images/portfolio/mobrob-TimevsPathLength.png" alt="Planning time versus path length" loading="lazy"><figcaption>Faster planning and shorter routes didn't always arrive together.</figcaption></figure>
        <figure class="editorial-figure"><img src="/assets/images/portfolio/mobrob-Average_Clearance.png" alt="Average obstacle clearance comparison" loading="lazy"><figcaption>Smoothing after planning can compromise clearance.</figcaption></figure>
      </div>
    </div>
  </section>

  <section class="story-section">
    <p class="story-eyebrow">THE TAKEAWAY</p>
    <h2>Which approach won?</h2>
    <p>Neither, universally. This was a planning comparison, not a flight-ready controller. The important distinction was <em>plan with the dynamics built in</em> versus <em>plan first, smooth later</em>, evaluated with the same environments and metrics.</p>
    <p class="story-endnote">Next up: close the loop with a tracking controller and see whether that simulated smoothness makes for better actual flight.</p>
  </section>
</div>
