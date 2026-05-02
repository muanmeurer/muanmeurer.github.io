---
layout: post
order: 3
title: "Quadrotor Control: 3D Motion Planning"
description: "I built and evaluated quadrotor planning pipelines that compared dynamics-aware Hybrid A* motion primitives against RRT* with minimum-snap smoothing across increasingly difficult 3D environments."
skills:
  - Python
  - Quadrotor planning
  - Hybrid A*
  - RRT*
  - Minimum snap
  - Open3D
main-image: "/cover.png"
---


## Introduction

Quadrotors need more than collision-free paths. A useful path must also respect vehicle motion limits, avoid obstacles with enough clearance, and remain smooth enough to track. The objective of this project was to compare two planning philosophies: planning with dynamics built into the search, and planning a geometric path first before enforcing smoothness through trajectory optimization.

## Methods

Our team created easy, medium, and difficult 3D environments in Open3D and exported them as PLY files. I worked on the Python planning stack that converted those environments into voxel occupancy grids, generated candidate motion primitives, collision-checked candidate arcs, and evaluated planner outputs. The Hybrid A* pipeline used dynamically feasible motion primitives during search. The RRT* pipeline generated a collision-free waypoint path, pruned and densified it, then fit a minimum-snap trajectory to improve smoothness.

<div class="figure-grid three">
  <img src="/assets/images/portfolio/mobrob-easypathAstar.png" alt="Hybrid A* easy environment result">
  <img src="/assets/images/portfolio/mobrob-environments.png" alt="Easy, medium, and difficult quadrotor environments">
  <img src="/assets/images/portfolio/mobrob-TimevsPathLength.png" alt="Path length and timing comparison graph">
</div>
<p class="caption">The comparison used three obstacle environments and evaluated path length, generation time, smoothness, and clearance.</p>

## Results

The results showed a clear tradeoff. RRT* with minimum-snap smoothing was faster and smoother, but it usually produced longer paths. Hybrid A* with motion primitives produced more dynamics-aware paths during planning, but it needed careful tuning of yaw bins, primitive duration, goal tolerances, and cost weights. On the easy case, Hybrid A* produced a 23.63 m path in 28.36 s with a curve-cost value of 17.94 and 0.54 m average clearance. The minimum-snap pipeline produced a longer 28.92 m path, but generated it in 0.4 s with a much lower curve-cost value of 3.42 and 1.2 m average clearance.

![Average clearance comparison](/assets/images/portfolio/mobrob-Average_Clearance.png)
<p class="caption">Planner choice changed both path quality and risk. Smoother trajectories were not automatically better if smoothing reduced clearance in tight environments.</p>

## Discussion

The project made the planning tradeoff visible: Hybrid A* was better for building vehicle constraints into the path early, while RRT* with minimum snap was better for fast, smooth trajectory generation. The main engineering lesson was that a planner cannot be judged by one metric. Path length, runtime, smoothness, and clearance all matter, and the right method depends on whether the priority is tight obstacle avoidance, dynamic comfort, or fast replanning. This project demonstrates robotics software, algorithm evaluation, 3D environment modeling, collision checking, and debugging complex Python systems.
