import React from 'react';
import ReactDOM from 'react-dom';

import { denyReply as denyReplyRuleset } from './Rulesets';
import { runRuleset } from './RulesetRunner';

export default class App extends React.Component
{
  static propTypes = { dpapp: React.PropTypes.object.isRequired };

  componentDidMount() {
    const { dpapp } = this.props;

    dpapp.context.on('context.ticket.reply', (sendResponse, tabData) => {
      const { api_data: ticket } = tabData;
      const response = this.onTicketReply(ticket, tabData);
      sendResponse(null, response);
    });
  }

  onTicketReply = (ticket, tabData) =>
  {
    const deny = runRuleset(denyReplyRuleset, ticket, tabData);
    return deny ? { allowReply: false, reason: 'You cannot reply before adding a timelog entry.' } : { allowReply: true }
  };

  shouldComponentUpdate() { return false; }

  render() { return null; }
}
