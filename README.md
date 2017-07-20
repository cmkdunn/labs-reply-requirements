# app-reply-requirements

Allow an agent to reply only if a set of rules is satisfied.

## Prerequisites

Make sure you have an up to date version of node, preferably version 6.x.x

Make sure you have the latest Deskpro Apps Tool, installed globally

    npm install -g  @deskproapps/dpat


## Getting started

    
### Start the development server    
    
In your project folder run    
    
    npm install && dpat server .

You can also give **dpat** the full path to your project folder 

Go to your deskpro installation, login to the agent interface, and navigate to the link below: 
    
    https://your-local-deskpro.com/agent/?appstore.environment=development

Notice the **appstore.environment=development** query parameter that tells Deskpro to load your application from the development server

Click on a ticket and you should see the right hand side panel opening, showing your development application

### Changing the default application
 
To start making changes, open the following file in  your favourite editor.
 
    src/main/javascript/App.jsx
    
While the development server is on,  any change will cause the application to be reloaded in the Deskpro window, giving 
you a nice live preview.

## Documentation

 View online docs at: https://deskproapps.github.io/labs-reply-requirements
