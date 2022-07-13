//algo
// input none, output Object
// assign messages to warn, error, log
// assign message to variable message
// create methods as functions

// !!!dont forget export
const createLogger = () => {
  const memory = [];

  const warn = (message) => {
    memory.unshift({
      message,
      type: "warn",
      dateTime: new Date(),
    });
  };

  const error = (message) => {
    memory.unshift({
      message,
      type: "error",
      dateTime: new Date(),
    });
  };

  const log = (message) => {
    memory.unshift({
      message,
      type: "log",
      dateTime: new Date(),
    });
  };

  const getRecords = (type) => {
    if (type === undefined) {
      return memory;
    }
    return memory.filter((el) => el.type === type);
  };
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const object = createLogger();

console.log(object);
