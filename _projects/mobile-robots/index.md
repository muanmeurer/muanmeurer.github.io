---
layout: post
order: 3
title: "Quadrotor Control: 3D Motion Planning"
description: "Bottom line: I built and evaluated a 3D quadrotor planning stack that compared dynamics-aware Hybrid A* motion primitives against RRT* plus minimum-snap smoothing across easy, medium, and hard obstacle environments."
skills:
  - Python
  - Motion planning
  - RRT*
  - Hybrid A*
  - Trajectory generation
  - Open3D
main-image: "/cover.png"
---

<div class="bluf-card"><p><strong>Bottom line:</strong> I built and evaluated a 3D quadrotor planning stack that compared dynamics-aware Hybrid A* motion primitives against RRT* plus minimum-snap smoothing across easy, medium, and hard obstacle environments.</p></div>

## Introduction

Quadrotors need paths that are collision-free and physically reasonable to follow. A geometric planner can find a route through obstacles, but that route may require turns or accelerations that are poor for a real vehicle. The objective of this project was to compare two planning philosophies: plan with dynamics built in, or plan geometrically first and enforce smoothness afterward.

## Methods

I implemented and debugged the planning stack in Python using Open3D environments converted into voxel occupancy grids. The first pipeline used Hybrid A* with motion primitives, where short forward arcs were generated, collision checked, scored, and stitched into a feasible trajectory. The second pipeline used RRT* to produce a geometric path, then applied minimum-snap trajectory generation to smooth the result. Each method was tested in easy, medium, and hard environments and evaluated using path length, simulation time, smoothness, and average obstacle clearance.

<div class="figure-row two">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/mobrob-easypathAstar.png" alt="Hybrid A star easy environment path"><figcaption>Hybrid A* result in the easy cave environment. The planner expands feasible motion primitives instead of only connecting straight-line waypoints.</figcaption></figure>
  <figure class="figure-card wide"><img src="/assets/images/portfolio/mobrob-environments.png" alt="Easy medium and hard obstacle environments"><figcaption>Three environments increased obstacle complexity from an open cave to a dense forest and then a complicated cave.</figcaption></figure>
</div>

<div class="figure-row single">
  <figure class="figure-card compact"><img src="/assets/images/portfolio/mobrob-motionprimatives.png" alt="Motion primitive candidates"><figcaption>Candidate motion primitives were generated from each state, filtered by collision checking, and scored by a cost function that balanced travel, climb, steering, heading error, clearance, and progress.</figcaption></figure>
</div>

## Results

The comparison showed a clear tradeoff between path quality, runtime, smoothness, and risk. Hybrid A* produced shorter paths in the tested cases, but planning time depended heavily on environment complexity and cost tuning. RRT* with minimum-snap smoothing generated much smoother-looking trajectories quickly, but smoothing sometimes reduced obstacle clearance in tight environments. The average clearance plot made this risk obvious: smoother trajectories were not automatically safer if they cut too close to obstacles.

<div class="figure-row two">
  <figure class="figure-card chart"><img src="/assets/images/portfolio/mobrob-TimevsPathLength.png" alt="Time versus path length chart"><figcaption>Time versus path length belongs in the results because it shows the core planning tradeoff: shorter paths are not always faster to generate.</figcaption></figure>
  <figure class="figure-card chart"><img src="/assets/images/portfolio/mobrob-Average_Clearance.png" alt="Average obstacle clearance chart"><figcaption>Average obstacle clearance shows why smoothness alone is not enough. A trajectory can look good but still carry more collision risk.</figcaption></figure>
</div>

## Discussion

The main lesson was that planning metrics only matter when tied to physical behavior. Voxel resolution, obstacle representation, heading bins, primitive duration, collision-checking density, and smoothing all changed the final behavior. This project demonstrates robotics software development, algorithm comparison, Python debugging, 3D visualization, and the ability to connect numerical planner metrics to real navigation risk.
