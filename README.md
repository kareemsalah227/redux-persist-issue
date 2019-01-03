# redux-persist-issue
https://github.com/rt2zz/redux-persist/issues/953

This repository is a reproduction code for the issue mentioned in the thread above, clone it, `yarn`, and then `yarn start` to make sure that it's running, if it's running correctly, try `flow` and you'll see the error in the react integration file.

Please note that there's a `setTimeout` in the `componentDidMount`, just for 3 seconds to dispatch an action, it's only meant for illustration purposes, please wait for it to finish.
