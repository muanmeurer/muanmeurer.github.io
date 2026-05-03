---
layout: post
order: 3
title: "Quadrotor Control: 3D Motion Planning"
description: "Compared Hybrid A* motion primitives against RRT* with minimum-snap smoothing for quadrotor navigation in increasingly complex 3D environments."
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

We built three Open3D environments and converted them into 3D occupancy grids.

<div class="figure-row single">
  <figure class="figure-card wide"><img src="/assets/images/portfolio/mobrob-environments.png" alt="Easy medium and hard obstacle environments"><figcaption>Test environments increased obstacle density from simple cave to forest to complicated cave.</figcaption></figure>
</div>

The **Hybrid A*** planner generated short forward arcs, removed arcs that failed collision checks, and scored the remaining candidates with travel, climb, steering, heading error, clearance, and progress terms.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/mobrob-easypathAstar.png" alt="Hybrid A star easy environment path"><figcaption>Hybrid A* result in the easy cave environment.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/mobrob-motionprimatives.png" alt="Motion primitive candidates"><figcaption>Motion primitives show the local feasible options evaluated from each state.</figcaption></figure>
</div>

The **RRT* + minimum snap** planner generated a collision-free waypoint path, then smoothed it with a polynomial trajectory.

Evaluation metrics:

- **Path length**
- **Simulation time**
- **Smoothness**
- **Average obstacle clearance**

## Results

The methods exposed a tradeoff. **Hybrid A*** often produced shorter paths, but runtime depended on environment complexity and cost tuning. **RRT* + minimum snap** produced smoother-looking paths quickly, but smoothing reduced clearance in tight spaces.

<div class="figure-row two chart-pair tight-charts">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/mobrob-TimevsPathLength.png" alt="Time versus path length chart"><figcaption>Time versus path length showed that shorter paths were not always faster to generate.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/mobrob-Average_Clearance.png" alt="Average obstacle clearance chart"><figcaption>Average obstacle clearance showed that smooth trajectories can still carry collision risk.</figcaption></figure>
</div>

## Discussion

Planner metrics only matter when they connect back to flight behavior. Voxel resolution, obstacle representation, heading bins, primitive duration, collision-checking density, and smoothing all changed the final trajectory.

**Main takeaway:** smoothness helps, but it cannot replace clearance, feasibility, and collision-aware planning.
