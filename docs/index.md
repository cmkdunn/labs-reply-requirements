# app-reply-requirements

Allow an agent to reply only if a set of rules is satisfied.

## How it works
    
This application uses a simple rule system to determine if an agent can reply to a ticket. The rules are written
in disjunctive normal form  ( an OR of ANDs, see https://en.wikipedia.org/wiki/Disjunctive_normal_form for more information)

By default, it comes with only two rules which prevent the agent from replying **only** if time billing is enabled and the ticket does not yet have any time charges

## Changing the rules

The easiest and recommended way to change the rules is by editing the default ruleset from the rulesets file: [src/main/javascript/Rulesets](https://github.com/DeskproApps/app-reply-requirements/blob/master/src/main/javascript/Rulesets.js)

The initial file looks like this:

    "use strict";
    
    // rules in rulesets are represented in a disjunctive normal form, an OR of ANDs
    export const denyReply = {
      rules: [
        [
          (ticket, tabData) => tabData.hasTimeLog,          // deny reply if time log is enabled AND
          (ticket, tabData) => ticket.charges.length === 0  // no time charges where added  
        ]
      ]
    };

    
If you want to narrow down the criteria, just add a new rule to the first group of rules. 
For instance if we want to deny replying based also on department the file would look like this:
   
    "use strict";
    
    // rules in rulesets are represented in a disjunctive normal form, an OR of ANDs
    export const denyReply = {
      rules: [
        [
          (ticket, tabData) => tabData.hasTimeLog,          // deny reply if time log is enabled AND
          (ticket, tabData) => ticket.charges.length === 0,  // no time charges where added
          (ticket, tabData) => tabData.department && [1, 2, 4].indexOf(tabData.department.id) !== -1 // check the ticket's is whitelisted
        ]
      ]
    }; 