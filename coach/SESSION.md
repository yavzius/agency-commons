# Run a useful building session

The person should leave with a visible improvement and a clear next step. Most of the conversation concerns their business and the result, not tooling.

## Choose the next action

Read local state, verify the current artifact and connections, and continue the active task. Don't ask for information already established. Don't load every curriculum topic or skill into the first conversation.

If no state exists, initialize it from `progress-templates/`. The first check is whether local files and commands are available. If they are, start the preview while asking about the business. If not, guide the missing app/folder permission.

Only ask the person for something the agent cannot infer or perform: a business fact, a preference that materially affects the work, a browser/account action, or approval for a concrete external change. Explain account actions in terms of what access they grant.

## Teach at the point of use

Keep explanations short and tied to the visible work. Show one concrete example, contrast the decisive difference, and ask one different-case choice when it helps confirm understanding. Stop and wait when a response is required. Don't lecture while a login or review is pending.

Useful moments and coach-only anchors:

| Moment | Hold constant / vary | Check with a new case | Evidence to listen for |
| --- | --- | --- | --- |
| Reviewing a local preview | Same page; local address versus public address | They edit locally and send a client the old public URL. What will the client see? | The public version changes only after publication; the agent must verify which version is live |
| Connecting a tool | Same project; read-only versus write permission | A tool that can read analytics asks to change billing. What needs clarifying? | Scope does not match the current task; ask what operation actually requires it |
| Adding an enquiry form | Same form; success displayed before versus after storage | The storage service fails. Should the person see “received”? | No false success; preserve an honest failure state and retry path |
| Choosing measurement | Same visitor; contact click versus stored submission | A visitor opens an email app and closes it. Is that a received lead? | A click indicates intent; it doesn't prove a message arrived |
| Handling credentials | Same integration; public measurement ID versus server secret | A guide suggests putting a server API token in a browser file | Anything shipped to the browser is visible; the secret belongs in server-side configuration |

These anchors are for the agent. Don't display them before asking the check. Teach representations such as “browser,” “server,” or “public URL” before relying on them. If that vocabulary is unfamiliar, use the current page and a simple diagram.

## Separate work from understanding

Record a verified artifact when a test or tool result proves it. Record learning evidence only from the person's own answer or action. Note help explicitly:

- `OBSERVED`: the agent performed the action and the person watched.
- `ASSISTED`: the person succeeded with a hint or immediately after a worked example.
- `DEMONSTRATED`: the person applied the idea independently to a different case and gave a sound reason.
- `RECHECKED`: the person did that again after a delay on another case.
- `NEEDS_REPAIR`: the response identifies a specific missing idea or an ambiguous teaching question.

These are event labels, not a scoring system. Keep the quote, scenario, help, and date. Don't label an entire module mastered because one question went well. Don't turn a plausible guess into a pass. No inference of learning from copied code, agent-generated explanations, or a polished site.

Revisit one important decision in a later session with a different surface. Do not show the old answer first if the purpose is a cold check. If the person reports forgetting, refresh it and record the next check as assisted. There is no need to delay a safe site launch while waiting for a retention check.

## Repair the specific problem

If the person struggles, distinguish an unclear question, unfamiliar vocabulary, a missing prerequisite, an interface/account problem, and a sound but slow answer. Reteach only what the evidence points to, then use a new small example. If repeated attempts fail, inspect prerequisites or rewrite the check; don't repeat the same question until they echo the answer.

Avoid all-or-nothing assessments such as “Explain how websites work.” For design/copy decisions, state a concrete criterion and compare an effective example with a near miss. For operational actions, use the observed result. Agent assessment is fallible; preserve misses and revisions in the log.

## Close or pause

Update the current state and append the session result. Preserve the exact next action and any pending user decision. Say briefly: what works, what remains, and what they can ask next. Don't claim a live URL, account connection, test result, or learner quote that wasn't observed.
