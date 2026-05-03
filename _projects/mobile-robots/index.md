---
layout: post
order: 3
title: "Quadrotor Control: 3D Motion Planning"
description: "Built a 3D quadrotor planning stack comparing Hybrid A* motion primitives against RRT* with minimum-snap smoothing across easy, medium, and hard obstacle fields."
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

**Quadrotors need paths that are both collision-free and physically reasonable to fly.** A geometric planner can find a route through obstacles, but that route may be too sharp, too close to obstacles, or too difficult for a vehicle to track.

**Project objective:** compare two planning philosophies:

- **Dynamics by construction:** Hybrid A* with motion primitives
- **Dynamics by enforcement:** RRT* path planning followed by minimum-snap smoothing

## Methods

We built three Open3D environments and converted them into 3D occupancy grids. The environments increased in difficulty from an open cave to a dense forest and then a complicated cave.

<div class="figure-row single">
  <figure class="figure-card wide"><img src="/assets/images/portfolio/mobrob-environments.png" alt="Easy medium and hard obstacle environments"><figcaption>Test environments increased obstacle density and planning difficulty from simple cave to forest to complicated cave.</figcaption></figure>
</div>

The **Hybrid A*** pipeline generated short forward arcs from each state, removed arcs that failed collision checks, and scored the remaining candidates using travel, climb, steering, heading error, clearance, and progress terms.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/mobrob-easypathAstar.png" alt="Hybrid A star easy environment path"><figcaption>Hybrid A* result in the easy cave environment. The path is built from feasible primitive rollouts.</figcaption></figure>
  <figure class="figure-card compact"><img src="/assets/images/portfolio/mobrob-motionprimatives.png" alt="Motion primitive candidates"><figcaption>Motion primitive candidates show the local dynamically feasible options evaluated from a state.</figcaption></figure>
</div>

The **RRT* + minimum snap** pipeline first generated a collision-free waypoint path, then smoothed it with a polynomial trajectory. We evaluated both methods using:

- Path length
- Simulation time
- Smoothness
- Average obstacle clearance

## Results

The methods exposed a real tradeoff. **Hybrid A*** often produced shorter paths, but its runtime depended strongly on environment complexity and cost tuning. **RRT* + minimum snap** produced smoother-looking paths quickly, but smoothing could reduce clearance in tight spaces.

<div class="figure-row two chart-pair">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/mobrob-TimevsPathLength.png" alt="Time versus path length chart"><figcaption>Time versus path length shows the planning tradeoff: shorter paths were not always faster to generate.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/mobrob-Average_Clearance.png" alt="Average obstacle clearance chart"><figcaption>Average obstacle clearance showed that a smooth trajectory can still carry higher collision risk.</figcaption></figure>
</div>

## Discussion

The main lesson was that planner metrics only matter when they connect back to flight behavior. Voxel resolution, obstacle representation, heading bins, primitive duration, collision-checking density, and smoothing all changed the final trajectory.

**Main takeaway:** smoothness is useful, but it cannot replace clearance, feasibility, and collision-aware planning.
