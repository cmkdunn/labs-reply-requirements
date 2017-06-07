"use strict";

export const runRuleset = (ruleset, ...inputs) => evalOrGroup(ruleset.rules, inputs);

/**
 * @param {Array<function>} rules
 * @param {Array<*>} inputs
 */
const evalOrGroup = (rules, inputs) =>
{
  for (const rule of rules) {
    const ruleResult = rule instanceof Array ? evalAndGroup(rule, inputs) : rule.apply(null, inputs);
    if (ruleResult) { return true; }
  }

  return false;
};

/**
 * @param {Array<function>} rules
 * @param {Array<*>} inputs
 */
const evalAndGroup = (rules, inputs) =>
{
  for (const rule of rules) {
    const ruleResult = rule.apply(null, inputs);
    if (!ruleResult) { return false; }
  }

  return true;
};