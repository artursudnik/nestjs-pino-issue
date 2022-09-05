Execute `npm ci`, then start application with `npm start`.
Compare the logs written when requesting the following endpoints:

* http://localhost:3000/controller-exception
* http://localhost:3000/guard-exception

In case of an exception thrown from within a controller the following log messages are written;
```text
ERROR [00:05:27.298] (37246): ControllerException: controller exception
    at AppController.throwError (/Users/artur/WebstormProjects/nestjs-pino-issue/src/app.controller.ts:23:11)
    at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/router/router-execution-context.js:38:29
    at InterceptorsConsumer.transformDeferred (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:31:33)
    at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:15:53
    at Observable._subscribe (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/observable/defer.ts:55:15)
    at Observable._trySubscribe (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/Observable.ts:245:19)
    at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/Observable.ts:235:18
    at Object.errorContext (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)
    at Observable.subscribe (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/Observable.ts:221:5)
    at doInnerSub (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/operators/mergeInternals.ts:71:40) {"req":{"id":2,"method":"GET","url":"/controller-exception","query":{},"params":{"0":"controller-exception"},"headers":{"host":"localhost:3000","user-agent":"curl/7.79.1","accept":"*/*"},"remoteAddress":"::ffff:127.0.0.1","remotePort":58966},"context":"ControllerExceptionFilter"}
ERROR [00:05:27.299] (37246): controller exception {"req":{"id":2,"method":"GET","url":"/controller-exception","query":{},"params":{"0":"controller-exception"},"headers":{"host":"localhost:3000","user-agent":"curl/7.79.1","accept":"*/*"},"remoteAddress":"::ffff:127.0.0.1","remotePort":58966},"context":"ExceptionsHandler"}
    err: {
      "type": "Error",
      "message": "controller exception",
      "stack":
          ControllerException: controller exception
              at AppController.throwError (/Users/artur/WebstormProjects/nestjs-pino-issue/src/app.controller.ts:23:11)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/router/router-execution-context.js:38:29
              at InterceptorsConsumer.transformDeferred (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:31:33)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:15:53
              at Observable._subscribe (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/observable/defer.ts:55:15)
              at Observable._trySubscribe (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/Observable.ts:245:19)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/Observable.ts:235:18
              at Object.errorContext (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)
              at Observable.subscribe (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/Observable.ts:221:5)
              at doInnerSub (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/operators/mergeInternals.ts:71:40)
    }
INFO [00:05:27.299] (37246): request errored {"req":{"id":2,"method":"GET","url":"/controller-exception","query":{},"params":{"0":"controller-exception"},"headers":{"host":"localhost:3000","user-agent":"curl/7.79.1","accept":"*/*"},"remoteAddress":"::ffff:127.0.0.1","remotePort":58966},"res":{"statusCode":500,"headers":{"x-powered-by":"Express","content-type":"application/json; charset=utf-8","content-length":"52","etag":"W/\"34-rlKccw1E+/fV8niQk4oFitDfPro\""}},"responseTime":4}
    err: {
      "type": "ControllerException",
      "message": "controller exception",
      "stack":
          ControllerException: controller exception
              at AppController.throwError (/Users/artur/WebstormProjects/nestjs-pino-issue/src/app.controller.ts:23:11)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/router/router-execution-context.js:38:29
              at InterceptorsConsumer.transformDeferred (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:31:33)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/interceptors/interceptors-consumer.js:15:53
              at Observable._subscribe (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/observable/defer.ts:55:15)
              at Observable._trySubscribe (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/Observable.ts:245:19)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/Observable.ts:235:18
              at Object.errorContext (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/util/errorContext.ts:29:5)
              at Observable.subscribe (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/Observable.ts:221:5)
              at doInnerSub (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/rxjs/src/internal/operators/mergeInternals.ts:71:40)
      "name": "ControllerException"
    }
```

In case of an exception thrown from within a guard the following is written:
```text
ERROR [00:06:55.439] (37246): guard exception {"req":{"id":3,"method":"GET","url":"/guard-exception","query":{},"params":{"0":"guard-exception"},"headers":{"host":"localhost:3000","user-agent":"curl/7.79.1","accept":"*/*"},"remoteAddress":"::ffff:127.0.0.1","remotePort":58969},"context":"GuardExceptionFilter"}
    err: {
      "type": "GuardException",
      "message": "guard exception",
      "stack":
          GuardException: guard exception
              at ThrowExceptionGuard.canActivate (/Users/artur/WebstormProjects/nestjs-pino-issue/src/guards/throw-exception.guard.ts:10:11)
              at GuardsConsumer.tryActivate (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/guards/guards-consumer.js:15:34)
              at canActivateFn (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/router/router-execution-context.js:134:59)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/router/router-execution-context.js:42:37
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/router/router-proxy.js:9:23
              at Layer.handle [as handle_request] (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/layer.js:95:5)
              at next (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/route.js:144:13)
              at Route.dispatch (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/route.js:114:3)
              at Layer.handle [as handle_request] (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/layer.js:95:5)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/index.js:284:15
      "name": "GuardException"
    }
ERROR [00:06:55.447] (37246): guard exception {"req":{"id":3,"method":"GET","url":"/guard-exception","query":{},"params":{"0":"guard-exception"},"headers":{"host":"localhost:3000","user-agent":"curl/7.79.1","accept":"*/*"},"remoteAddress":"::ffff:127.0.0.1","remotePort":58969},"context":"ExceptionsHandler"}
    err: {
      "type": "Error",
      "message": "guard exception",
      "stack":
          GuardException: guard exception
              at ThrowExceptionGuard.canActivate (/Users/artur/WebstormProjects/nestjs-pino-issue/src/guards/throw-exception.guard.ts:10:11)
              at GuardsConsumer.tryActivate (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/guards/guards-consumer.js:15:34)
              at canActivateFn (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/router/router-execution-context.js:134:59)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/router/router-execution-context.js:42:37
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/@nestjs/core/router/router-proxy.js:9:23
              at Layer.handle [as handle_request] (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/layer.js:95:5)
              at next (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/route.js:144:13)
              at Route.dispatch (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/route.js:114:3)
              at Layer.handle [as handle_request] (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/layer.js:95:5)
              at /Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/express/lib/router/index.js:284:15
    }
INFO [00:06:55.447] (37246): request errored {"req":{"id":3,"method":"GET","url":"/guard-exception","query":{},"params":{"0":"guard-exception"},"headers":{"host":"localhost:3000","user-agent":"curl/7.79.1","accept":"*/*"},"remoteAddress":"::ffff:127.0.0.1","remotePort":58969},"res":{"statusCode":500,"headers":{"x-powered-by":"Express","content-type":"application/json; charset=utf-8","content-length":"52","etag":"W/\"34-rlKccw1E+/fV8niQk4oFitDfPro\""}},"responseTime":9}
    err: {
      "type": "Error",
      "message": "failed with status code 500",
      "stack":
          Error: failed with status code 500
              at ServerResponse.onResFinished (/Users/artur/WebstormProjects/nestjs-pino-issue/node_modules/pino-http/logger.js:113:40)
              at ServerResponse.emit (node:events:402:35)
              at onFinish (node:_http_outgoing:830:10)
              at callback (node:internal/streams/writable:552:21)
              at afterWrite (node:internal/streams/writable:497:5)
              at afterWriteTick (node:internal/streams/writable:484:10)
              at processTicksAndRejections (node:internal/process/task_queues:82:21)
    }
```

Notice the how last log messages differs.
