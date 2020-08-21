---
title: The OAuth 2 Jargon Explained to a 5-year-old Kid
date: "2020-08-19T22:23:03.284Z"
description: "Learn the most used OAuth terminologies in plain English"
published: true
cover: ""
---

OAuth is a delegated authorization standard that specifies how to share information between two third-party services without having to ask for the user’s credentials.

Getting familiar with OAuth is not at all easy for someone starting in the security field. One of the reasons I see is that the spec uses non-familiar terminologies.

In this tutorial I'm trying to explain to you the most used terminologies in plain English.

# (Digital) identity
It's all information that define a user in a particular application. Let's see some examples.

On Facebook, the digital identity for a user might be their name, email or phone number, image profile, relationship status... On a book seller platform digital identity is credit card info, shipping address...

# Resource Owner (You, the user): 
the owner of the identity

# Client: 
The application (e.g. “theFastFood.com”) that wants to access data or perform actions on behalf of the Resource Owner.

# Authorization Server
The application that knows the Resource Owner, where they already have an account.

# Resource Server
The API or service the Client wants to use on behalf of the Resource Owner.

# Scopes
limit what an application can do on the behalf of a user.
# Consent

the authorization server takes the scopes the client is requesting and verifies with the resource owner whether or not they want to give the client permission.

# Access token
The key the client will use to communicate with the resource server. You may compare it to a badge or key card that gives the client permission to request data or perform actions with the resource server on your behalf.
