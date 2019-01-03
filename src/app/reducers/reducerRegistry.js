// @flow

export class ReducerRegistry {
  emitChange: any;

  reducers: any;

  constructor() {
    this.emitChange = null;
    this.reducers = {};
  }

  getReducers() {
    return { ...this.reducers };
  }

  register(name: string, reducer: mixed) {
    this.reducers = { ...this.reducers, [name]: reducer };

    if (this.emitChange) {
      this.emitChange(this.getReducers());
    }
  }

  setChangeListener(listener: Function) {
    this.emitChange = listener;
  }
}

export const reducerRegistry = new ReducerRegistry();
