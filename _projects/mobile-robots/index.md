---
layout: post
order: 3
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

## Introduction

**Quadrotors need paths that are collision-free and physically reasonable to fly.** A geometric path can avoid obstacles but still be too sharp, too close, or too hard to track.

**Objective:** compare two planning philosophies.

- **Dynamics by construction:** Hybrid A* with motion primitives.
- **Dynamics by enforcement:** RRT* followed by minimum-snap smoothing.

## Methods

We built three Open3D environments and converted them into **3D occupancy grids**.

<div class="figure-row single">
  <figure class="figure-card wide"><img src="/assets/images/portfolio/mobrob-environments.png" alt="Easy medium and hard obstacle environments"><figcaption>Obstacle complexity increased from an open cave to a dense forest and then a complicated cave.</figcaption></figure>
</div>

The **Hybrid A*** planner generated forward arcs, collision-checked them, and scored the remaining options using travel, climb, steering, heading error, clearance, and progress terms.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/mobrob-easypathAstar.png" alt="Hybrid A star easy environment path"><figcaption>Hybrid A* generated a dynamics-aware path through the easy cave.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/mobrob-motionprimatives.png" alt="Motion primitive candidates"><figcaption>Motion primitives show the local feasible arcs evaluated from each state.</figcaption></figure>
</div>

The **RRT* + minimum snap** planner first generated waypoints, then fit a polynomial trajectory to reduce snap and improve smoothness.

Evaluation metrics:

- **Path length**
- **Simulation time**
- **Smoothness**
- **Average obstacle clearance**

## Results

The comparison showed that **smoother-looking trajectories were not automatically safer**. RRT* + minimum snap was fast and smooth, but it sometimes cut close to obstacles. Hybrid A* kept dynamics inside the search, but needed more tuning and computation.

<div class="figure-row two chart-pair tight-charts">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/mobrob-TimevsPathLength.png" alt="Time versus path length chart"><figcaption>Time versus path length showed that shorter paths were not always faster to generate.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/mobrob-Average_Clearance.png" alt="Average obstacle clearance chart"><figcaption>Clearance results showed the risk of smoothing a path after geometric planning.</figcaption></figure>
</div>

## Discussion

This project **worked as a planning comparison**, not as a final flight controller. The useful result was identifying when each pipeline fails: Hybrid A* can become expensive when the primitive set is large, while RRT* + minimum snap can produce a visually smooth trajectory that loses clearance in tight environments.

The unique part was comparing **plan-with-dynamics-built-in** against **plan-first, smooth-later** using the same environments and metrics. For real quadrotor navigation, the next step would be connecting the planner to tracking control and testing whether the simulated smoothness actually improves closed-loop flight behavior.
