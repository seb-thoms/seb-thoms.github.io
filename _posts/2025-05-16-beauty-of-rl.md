---
layout: post
title: "The Beauty of RL"
date: 2025-05-15 10:00:00 -0700 # YYYY-MM-DD HH:MM:SS 
category: "Tech" 
image: "/assets/images/blog/beauty-of-rl.png"
excerpt: "We learn from our actions and their outcomes. This is the essence of reinforcement learning."
image_credit: "<sup>*</sup>Image generated by Gemini"
---

## How Do We Learn?

I’d like to think we learn from experiences. And this process begins the moment we’re born. As babies, we don’t know anything. We explore. We try things. We receive feedback — sometimes from our own senses, sometimes from the adults around us.

“Hey look, a candle!” — the baby reaches out and touches it. A sharp pain shoots through the fingers (sensory feedback), and perhaps an adult yells, “No!” (external feedback). The brain registers: Don’t touch the flame again.

We have new experiences. We live those new experiences. We face consequences — good or bad — and those consequences shape who we are.

We learn from our actions and their outcomes.

This is the essence of reinforcement learning.

## The Core of Reinforcement Learning

Reinforcement Learning (RL) is built on a simple but powerful idea: an agent learns by interacting with an environment and receiving feedback in the form of rewards.

In RL, we refer to these learning experiences as episodes — sequences of interactions that begin at an initial state and proceed step by step until a termination condition is reached. These episodes are where the agent learns. But how does that learning actually happen?

That’s where RL algorithms come into play. And among them, Temporal Difference (TD) learning might just be the most important.

## TD Learning — Learning at Every Step

Temporal Difference learning is a class of RL algorithms where the agent learns from every step it takes. I like to think of this as analogous to how we learn from our surroundings in real life. We act, observe, react — continuously updating our internal models.

But analogies only take us so far. In computer science, we need mathematical formalisms. We need to represent the learning process in equations and values we can optimize. This is where concepts like state-value and action-value (Q-value) come in.

First, we model the environment as a set of states. Mathematically, a state might be represented as a tuple, capturing relevant information at a given point. There’s more going on behind the scenes — notably, we assume the environment satisfies the Markov property — but let’s save that rabbit hole for another time.

At each step, the agent updates its knowledge of these states to choose better actions and reach better outcomes.

## Rewards: Feedback in Numbers

Just like humans have receptors giving immediate feedback, RL agents receive rewards. Rewards are numeric signals provided by the environment designer, nudging the agent toward desired behaviors. You can think of them as a heuristic guide — they don't encode everything, but they point in the right direction.

But here’s the million-dollar question:

Does immediate pleasure always mean long-term gain?

Of course not. This dilemma mirrors real life. Eat a donut now (pleasure) vs. stay healthy long-term (reward). So how do we train agents to value the future and not just the now?

This is where the discount factor comes in.

A discount factor, denoted by γ (gamma), tells the agent how much to prioritize future rewards over immediate ones:

* γ = 0 → only care about immediate reward.
* γ = 1 → care only about future rewards.

In practice, we choose a value between 0 and 1 — teaching the agent to balance short-term and long-term consequences.

## The Million-Dollar Equation

All of this leads us to one of the most important equations in RL:

V(s) ← V(s) + α [r + γ * V(s') − V(s)]


Where:

* `V(s)` is the value of the current state
* `α` is the learning rate
* `r` is the reward received
* `γ` is the discount factor
* `V(s')` is the value of the next state

The term in brackets is the TD error — the gap between what the agent expected and what actually happened. This difference tells us whether the outcome was better, worse, or exactly what we thought.

If the TD error is:

* Positive → things went better than expected
* Negative → worse than expected
* Zero → exactly as expected (rarely the case!)

The agent updates its belief about the state accordingly.

## Our Brains Do This Too

Here’s the twist: biology already figured this out.

In neuroscience, there’s something called the dopamine reward prediction error. When your brain expects a reward and either gets more or less than anticipated, certain neurons — dopaminergic neurons — signal that difference. That signal updates your future expectations and influences behavior.

Sound familiar?

It’s remarkably similar to TD learning. Our brains are updating internal value functions all the time — while walking, conversing, making decisions. We try, fail, get feedback, and adjust. That’s the spirit of reinforcement learning.

## Could Reinforcement Learning Lead to AGI?

The more I learn about RL, the more it feels human. It mirrors how we learn — from feedback, from experience, from trial and error.

So it’s no surprise that many researchers believe RL could be a cornerstone of Artificial General Intelligence (AGI)— systems that, like humans, can solve a wide range of problems without being explicitly programmed for each one.

Projects like DeepMind’s AlphaGo, AlphaZero, and MuZero use reinforcement learning at their core. These systems didn't just win games — they learned, adapted, and surprised even their creators.

But AGI isn’t just about mastering games. It’s about:

* Generalization — solving new tasks without being retrained
* Exploration — trying new strategies without being told to
* Adaptation — improving from feedback in real time
* Self-directed learning — setting and pursuing goals

RL naturally supports all of this:

* It learns from sparse, delayed feedback — like humans.
* It balances exploration (curiosity) and exploitation (habits).
* It improves over long time horizons, not just short bursts.

## Challenges Ahead

Of course, RL isn’t perfect. There are major hurdles:

* Sample inefficiency — agents often need millions of interactions.
* Reward design — crafting rewards that lead to intended behaviors is hard.
* Safety and alignment — we must ensure agents behave ethically and predictably.

But no other framework so elegantly captures the interactive, goal-driven, long-term nature of learning and intelligence.

## Final Thought

Maybe the path to AGI doesn’t lie in mimicking how humans look — but in replicating how we learn.

And in that quest, reinforcement learning might not just be a tool.

It might be the map.