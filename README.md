# 🏆 Portafolio QA - Luciana Calvi

      Bienvenido a mi portafolio de pruebas automatizadas con Playwright. Este repositorio contiene pruebas 
      desarrolladas para validar el flujo de inicio de sesion y registro en el sitio web: 
      https://petstore.octoperf.com/actions/Catalog.action 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## 📚 Contenido

- [🎯 Objetivo del Proyecto](#-objetivo-del-proyecto)
- [📥 Clonación del Repositorio](#-clonación-del-repositorio)
- [🚀 Pruebas Realizadas](#-pruebas-realizadas)
- [🛠️ Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [▶️ Cómo Ejecutar las Pruebas](#️-cómo-ejecutar-las-pruebas)
- [📸 Capturas de Pantalla / Videos](#-capturas-de-pantalla--videos)



## 🎯 Objetivo del Proyecto
  
        El objetivo de este repositorio es demostrar mis habilidades en pruebas automatizadas utilizando Playwright, validando el flujo completo de inicio de sesion y registro
        Este proyecto forma parte de mi portafolio como QA Manual con conocimientos en automatización.

## 📥 Clonación del Repositorio

      Para obtener una copia local del proyecto, ejecuta el siguiente comando en tu terminal:
      https://github.com/Luciana-Calvi/proyectoPlaywright.git
      
## 🚀 Pruebas Realizadas

      📌 loginOk.spec.js - Incluye un caso positivo (credenciales válidas) y uno negativo (credenciales inválidas, verificación del mensaje de error y captura de pantalla).
      📌 loginFail.spec.js - Incluye un caso negativo (credenciales inválidas, verificación del mensaje de   error).
      📌 registroOk.spec.js - Incluye casos positivos.
      📌 registroFail.spec.js - Incluye casos negativos y con campos vacíos. 

## 🛠️ Tecnologías Utilizadas

      🏗️ Playwright (para las pruebas automatizadas)

      💻 JavaScript (lenguaje principal para los tests)
      
      🔗 Git y GitHub (control de versiones y repositorio remoto)

## 📂 Estructura del Proyecto

      C:.
│   .gitignore
│   package-lock.json
│   package.json
│   playwright.config.js
│
├───node_modules
│   │   .package-lock.json
│   │
│   ├───.bin
│   │       playwright
│   │       playwright-core
│   │       playwright-core.cmd
│   │       playwright-core.ps1
│   │       playwright.cmd
│   │       playwright.ps1
│   │
│   ├───@playwright
│   │   └───test
│   │           cli.js
│   │           index.d.ts
│   │           index.js
│   │           index.mjs
│   │           LICENSE
│   │           NOTICE
│   │           package.json
│   │           README.md
│   │           reporter.d.ts
│   │           reporter.js
│   │           reporter.mjs
│   │
│   ├───@types
│   │   └───node
│   │       │   assert.d.ts
│   │       │   async_hooks.d.ts
│   │       │   buffer.buffer.d.ts
│   │       │   buffer.d.ts
│   │       │   child_process.d.ts
│   │       │   cluster.d.ts
│   │       │   console.d.ts
│   │       │   constants.d.ts
│   │       │   crypto.d.ts
│   │       │   dgram.d.ts
│   │       │   diagnostics_channel.d.ts
│   │       │   dns.d.ts
│   │       │   dom-events.d.ts
│   │       │   domain.d.ts
│   │       │   events.d.ts
│   │       │   fs.d.ts
│   │       │   globals.d.ts
│   │       │   globals.typedarray.d.ts
│   │       │   http.d.ts
│   │       │   http2.d.ts
│   │       │   https.d.ts
│   │       │   index.d.ts
│   │       │   inspector.d.ts
│   │       │   LICENSE
│   │       │   module.d.ts
│   │       │   net.d.ts
│   │       │   os.d.ts
│   │       │   package.json
│   │       │   path.d.ts
│   │       │   perf_hooks.d.ts
│   │       │   process.d.ts
│   │       │   punycode.d.ts
│   │       │   querystring.d.ts
│   │       │   readline.d.ts
│   │       │   README.md
│   │       │   repl.d.ts
│   │       │   sea.d.ts
│   │       │   sqlite.d.ts
│   │       │   stream.d.ts
│   │       │   string_decoder.d.ts
│   │       │   test.d.ts
│   │       │   timers.d.ts
│   │       │   tls.d.ts
│   │       │   trace_events.d.ts
│   │       │   tty.d.ts
│   │       │   url.d.ts
│   │       │   util.d.ts
│   │       │   v8.d.ts
│   │       │   vm.d.ts
│   │       │   wasi.d.ts
│   │       │   worker_threads.d.ts
│   │       │   zlib.d.ts
│   │       │
│   │       ├───assert
│   │       │       strict.d.ts
│   │       │
│   │       ├───compatibility
│   │       │       iterators.d.ts
│   │       │
│   │       ├───dns
│   │       │       promises.d.ts
│   │       │
│   │       ├───fs
│   │       │       promises.d.ts
│   │       │
│   │       ├───readline
│   │       │       promises.d.ts
│   │       │
│   │       ├───stream
│   │       │       consumers.d.ts
│   │       │       promises.d.ts
│   │       │       web.d.ts
│   │       │
│   │       ├───timers
│   │       │       promises.d.ts
│   │       │
│   │       ├───ts5.6
│   │       │   │   buffer.buffer.d.ts
│   │       │   │   globals.typedarray.d.ts
│   │       │   │   index.d.ts
│   │       │   │
│   │       │   └───compatibility
│   │       │           float16array.d.ts
│   │       │
│   │       └───ts5.7
│   │           │   index.d.ts
│   │           │
│   │           └───compatibility
│   │                   float16array.d.ts
│   │
│   ├───playwright
│   │   │   cli.js
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   index.mjs
│   │   │   jsx-runtime.js
│   │   │   jsx-runtime.mjs
│   │   │   LICENSE
│   │   │   NOTICE
│   │   │   package.json
│   │   │   README.md
│   │   │   test.d.ts
│   │   │   test.js
│   │   │   test.mjs
│   │   │   ThirdPartyNotices.txt
│   │   │
│   │   ├───lib
│   │   │   │   fsWatcher.js
│   │   │   │   index.js
│   │   │   │   internalsForTest.js
│   │   │   │   program.js
│   │   │   │   util.js
│   │   │   │   utilsBundle.js
│   │   │   │   utilsBundleImpl.js
│   │   │   │
│   │   │   ├───common
│   │   │   │       config.js
│   │   │   │       configLoader.js
│   │   │   │       esmLoaderHost.js
│   │   │   │       expectBundle.js
│   │   │   │       expectBundleImpl.js
│   │   │   │       fixtures.js
│   │   │   │       globals.js
│   │   │   │       ipc.js
│   │   │   │       poolBuilder.js
│   │   │   │       process.js
│   │   │   │       suiteUtils.js
│   │   │   │       test.js
│   │   │   │       testLoader.js
│   │   │   │       testType.js
│   │   │   │
│   │   │   ├───isomorphic
│   │   │   │       events.js
│   │   │   │       folders.js
│   │   │   │       stringInternPool.js
│   │   │   │       teleReceiver.js
│   │   │   │       teleSuiteUpdater.js
│   │   │   │       testServerConnection.js
│   │   │   │       testServerInterface.js
│   │   │   │       testTree.js
│   │   │   │       types.d.js
│   │   │   │
│   │   │   ├───loader
│   │   │   │       loaderMain.js
│   │   │   │
│   │   │   ├───matchers
│   │   │   │       expect.js
│   │   │   │       matcherHint.js
│   │   │   │       matchers.js
│   │   │   │       toBeTruthy.js
│   │   │   │       toEqual.js
│   │   │   │       toHaveURL.js
│   │   │   │       toMatchAriaSnapshot.js
│   │   │   │       toMatchSnapshot.js
│   │   │   │       toMatchText.js
│   │   │   │
│   │   │   ├───plugins
│   │   │   │       gitCommitInfoPlugin.js
│   │   │   │       index.js
│   │   │   │       webServerPlugin.js
│   │   │   │
│   │   │   ├───reporters
│   │   │   │   │   base.js
│   │   │   │   │   blob.js
│   │   │   │   │   dot.js
│   │   │   │   │   empty.js
│   │   │   │   │   github.js
│   │   │   │   │   html.js
│   │   │   │   │   internalReporter.js
│   │   │   │   │   json.js
│   │   │   │   │   junit.js
│   │   │   │   │   line.js
│   │   │   │   │   list.js
│   │   │   │   │   markdown.js
│   │   │   │   │   merge.js
│   │   │   │   │   multiplexer.js
│   │   │   │   │   reporterV2.js
│   │   │   │   │   teleEmitter.js
│   │   │   │   │
│   │   │   │   └───versions
│   │   │   │           blobV1.js
│   │   │   │
│   │   │   ├───runner
│   │   │   │       dispatcher.js
│   │   │   │       failureTracker.js
│   │   │   │       lastRun.js
│   │   │   │       loaderHost.js
│   │   │   │       loadUtils.js
│   │   │   │       processHost.js
│   │   │   │       projectUtils.js
│   │   │   │       rebase.js
│   │   │   │       reporters.js
│   │   │   │       runner.js
│   │   │   │       sigIntWatcher.js
│   │   │   │       taskRunner.js
│   │   │   │       tasks.js
│   │   │   │       testGroups.js
│   │   │   │       testServer.js
│   │   │   │       uiModeReporter.js
│   │   │   │       vcs.js
│   │   │   │       watchMode.js
│   │   │   │       workerHost.js
│   │   │   │
│   │   │   ├───third_party
│   │   │   │       pirates.js
│   │   │   │       tsconfig-loader.js
│   │   │   │
│   │   │   ├───transform
│   │   │   │       babelBundle.js
│   │   │   │       babelBundleImpl.js
│   │   │   │       compilationCache.js
│   │   │   │       esmLoader.js
│   │   │   │       portTransport.js
│   │   │   │       transform.js
│   │   │   │
│   │   │   └───worker
│   │   │           fixtureRunner.js
│   │   │           testInfo.js
│   │   │           testTracing.js
│   │   │           timeoutManager.js
│   │   │           util.js
│   │   │           workerMain.js
│   │   │
│   │   └───types
│   │           test.d.ts
│   │           testReporter.d.ts
│   │
│   ├───playwright-core
│   │   │   browsers.json
│   │   │   cli.js
│   │   │   index.d.ts
│   │   │   index.js
│   │   │   index.mjs
│   │   │   LICENSE
│   │   │   NOTICE
│   │   │   package.json
│   │   │   README.md
│   │   │   ThirdPartyNotices.txt
│   │   │
│   │   ├───bin
│   │   │       install_media_pack.ps1
│   │   │       reinstall_chrome_beta_linux.sh
│   │   │       reinstall_chrome_beta_mac.sh
│   │   │       reinstall_chrome_beta_win.ps1
│   │   │       reinstall_chrome_stable_linux.sh
│   │   │       reinstall_chrome_stable_mac.sh
│   │   │       reinstall_chrome_stable_win.ps1
│   │   │       reinstall_msedge_beta_linux.sh
│   │   │       reinstall_msedge_beta_mac.sh
│   │   │       reinstall_msedge_beta_win.ps1
│   │   │       reinstall_msedge_dev_linux.sh
│   │   │       reinstall_msedge_dev_mac.sh
│   │   │       reinstall_msedge_dev_win.ps1
│   │   │       reinstall_msedge_stable_linux.sh
│   │   │       reinstall_msedge_stable_mac.sh
│   │   │       reinstall_msedge_stable_win.ps1
│   │   │
│   │   ├───lib
│   │   │   │   androidServerImpl.js
│   │   │   │   browserServerImpl.js
│   │   │   │   inprocess.js
│   │   │   │   inProcessFactory.js
│   │   │   │   outofprocess.js
│   │   │   │   utils.js
│   │   │   │   utilsBundle.js
│   │   │   │   zipBundle.js
│   │   │   │   zipBundleImpl.js
│   │   │   │
│   │   │   ├───cli
│   │   │   │       driver.js
│   │   │   │       program.js
│   │   │   │       programWithTestStub.js
│   │   │   │
│   │   │   ├───client
│   │   │   │       accessibility.js
│   │   │   │       android.js
│   │   │   │       api.js
│   │   │   │       artifact.js
│   │   │   │       browser.js
│   │   │   │       browserContext.js
│   │   │   │       browserType.js
│   │   │   │       cdpSession.js
│   │   │   │       channelOwner.js
│   │   │   │       clientHelper.js
│   │   │   │       clientInstrumentation.js
│   │   │   │       clientStackTrace.js
│   │   │   │       clock.js
│   │   │   │       connection.js
│   │   │   │       consoleMessage.js
│   │   │   │       coverage.js
│   │   │   │       dialog.js
│   │   │   │       download.js
│   │   │   │       electron.js
│   │   │   │       elementHandle.js
│   │   │   │       errors.js
│   │   │   │       eventEmitter.js
│   │   │   │       events.js
│   │   │   │       fetch.js
│   │   │   │       fileChooser.js
│   │   │   │       fileUtils.js
│   │   │   │       frame.js
│   │   │   │       harRouter.js
│   │   │   │       input.js
│   │   │   │       jsHandle.js
│   │   │   │       jsonPipe.js
│   │   │   │       localUtils.js
│   │   │   │       locator.js
│   │   │   │       network.js
│   │   │   │       page.js
│   │   │   │       platform.js
│   │   │   │       playwright.js
│   │   │   │       selectors.js
│   │   │   │       stream.js
│   │   │   │       timeoutSettings.js
│   │   │   │       tracing.js
│   │   │   │       types.js
│   │   │   │       video.js
│   │   │   │       waiter.js
│   │   │   │       webError.js
│   │   │   │       webSocket.js
│   │   │   │       worker.js
│   │   │   │       writableStream.js
│   │   │   │
│   │   │   ├───generated
│   │   │   │       bindingsControllerSource.js
│   │   │   │       clockSource.js
│   │   │   │       injectedScriptSource.js
│   │   │   │       pollingRecorderSource.js
│   │   │   │       storageScriptSource.js
│   │   │   │       utilityScriptSource.js
│   │   │   │       webSocketMockSource.js
│   │   │   │
│   │   │   ├───protocol
│   │   │   │       serializers.js
│   │   │   │       validator.js
│   │   │   │       validatorPrimitives.js
│   │   │   │
│   │   │   ├───remote
│   │   │   │       playwrightConnection.js
│   │   │   │       playwrightServer.js
│   │   │   │
│   │   │   ├───server
│   │   │   │   │   accessibility.js
│   │   │   │   │   artifact.js
│   │   │   │   │   browser.js
│   │   │   │   │   browserContext.js
│   │   │   │   │   browserType.js
│   │   │   │   │   callLog.js
│   │   │   │   │   clock.js
│   │   │   │   │   console.js
│   │   │   │   │   cookieStore.js
│   │   │   │   │   debugController.js
│   │   │   │   │   debugger.js
│   │   │   │   │   deviceDescriptors.js
│   │   │   │   │   deviceDescriptorsSource.json
│   │   │   │   │   dialog.js
│   │   │   │   │   dom.js
│   │   │   │   │   download.js
│   │   │   │   │   errors.js
│   │   │   │   │   fetch.js
│   │   │   │   │   fileChooser.js
│   │   │   │   │   fileUploadUtils.js
│   │   │   │   │   formData.js
│   │   │   │   │   frames.js
│   │   │   │   │   frameSelectors.js
│   │   │   │   │   harBackend.js
│   │   │   │   │   helper.js
│   │   │   │   │   index.js
│   │   │   │   │   input.js
│   │   │   │   │   instrumentation.js
│   │   │   │   │   javascript.js
│   │   │   │   │   launchApp.js
│   │   │   │   │   localUtils.js
│   │   │   │   │   macEditingCommands.js
│   │   │   │   │   network.js
│   │   │   │   │   page.js
│   │   │   │   │   pipeTransport.js
│   │   │   │   │   playwright.js
│   │   │   │   │   progress.js
│   │   │   │   │   protocolError.js
│   │   │   │   │   recorder.js
│   │   │   │   │   screenshotter.js
│   │   │   │   │   selectors.js
│   │   │   │   │   socksClientCertificatesInterceptor.js
│   │   │   │   │   socksInterceptor.js
│   │   │   │   │   transport.js
│   │   │   │   │   types.js
│   │   │   │   │   usKeyboardLayout.js
│   │   │   │   │
│   │   │   │   ├───android
│   │   │   │   │       android.js
│   │   │   │   │       backendAdb.js
│   │   │   │   │
│   │   │   │   ├───bidi
│   │   │   │   │   │   bidiBrowser.js
│   │   │   │   │   │   bidiChromium.js
│   │   │   │   │   │   bidiConnection.js
│   │   │   │   │   │   bidiExecutionContext.js
│   │   │   │   │   │   bidiFirefox.js
│   │   │   │   │   │   bidiInput.js
│   │   │   │   │   │   bidiNetworkManager.js
│   │   │   │   │   │   bidiOverCdp.js
│   │   │   │   │   │   bidiPage.js
│   │   │   │   │   │   bidiPdf.js
│   │   │   │   │   │
│   │   │   │   │   └───third_party
│   │   │   │   │           bidiCommands.d.js
│   │   │   │   │           bidiDeserializer.js
│   │   │   │   │           bidiKeyboard.js
│   │   │   │   │           bidiProtocol.js
│   │   │   │   │           bidiProtocolCore.js
│   │   │   │   │           bidiProtocolPermissions.js
│   │   │   │   │           bidiSerializer.js
│   │   │   │   │           firefoxPrefs.js
│   │   │   │   │
│   │   │   │   ├───chromium
│   │   │   │   │       appIcon.png
│   │   │   │   │       chromium.js
│   │   │   │   │       chromiumSwitches.js
│   │   │   │   │       crAccessibility.js
│   │   │   │   │       crBrowser.js
│   │   │   │   │       crConnection.js
│   │   │   │   │       crCoverage.js
│   │   │   │   │       crDevTools.js
│   │   │   │   │       crDragDrop.js
│   │   │   │   │       crExecutionContext.js
│   │   │   │   │       crInput.js
│   │   │   │   │       crNetworkManager.js
│   │   │   │   │       crPage.js
│   │   │   │   │       crPdf.js
│   │   │   │   │       crProtocolHelper.js
│   │   │   │   │       crServiceWorker.js
│   │   │   │   │       defaultFontFamilies.js
│   │   │   │   │       protocol.d.js
│   │   │   │   │       videoRecorder.js
│   │   │   │   │
│   │   │   │   ├───codegen
│   │   │   │   │       csharp.js
│   │   │   │   │       java.js
│   │   │   │   │       javascript.js
│   │   │   │   │       jsonl.js
│   │   │   │   │       language.js
│   │   │   │   │       languages.js
│   │   │   │   │       python.js
│   │   │   │   │       types.js
│   │   │   │   │
│   │   │   │   ├───dispatchers
│   │   │   │   │       androidDispatcher.js
│   │   │   │   │       artifactDispatcher.js
│   │   │   │   │       browserContextDispatcher.js
│   │   │   │   │       browserDispatcher.js
│   │   │   │   │       browserTypeDispatcher.js
│   │   │   │   │       cdpSessionDispatcher.js
│   │   │   │   │       debugControllerDispatcher.js
│   │   │   │   │       dialogDispatcher.js
│   │   │   │   │       dispatcher.js
│   │   │   │   │       electronDispatcher.js
│   │   │   │   │       elementHandlerDispatcher.js
│   │   │   │   │       frameDispatcher.js
│   │   │   │   │       jsHandleDispatcher.js
│   │   │   │   │       jsonPipeDispatcher.js
│   │   │   │   │       localUtilsDispatcher.js
│   │   │   │   │       networkDispatchers.js
│   │   │   │   │       pageDispatcher.js
│   │   │   │   │       playwrightDispatcher.js
│   │   │   │   │       streamDispatcher.js
│   │   │   │   │       tracingDispatcher.js
│   │   │   │   │       webSocketRouteDispatcher.js
│   │   │   │   │       writableStreamDispatcher.js
│   │   │   │   │
│   │   │   │   ├───electron
│   │   │   │   │       electron.js
│   │   │   │   │       loader.js
│   │   │   │   │
│   │   │   │   ├───firefox
│   │   │   │   │       ffAccessibility.js
│   │   │   │   │       ffBrowser.js
│   │   │   │   │       ffConnection.js
│   │   │   │   │       ffExecutionContext.js
│   │   │   │   │       ffInput.js
│   │   │   │   │       ffNetworkManager.js
│   │   │   │   │       ffPage.js
│   │   │   │   │       firefox.js
│   │   │   │   │       protocol.d.js
│   │   │   │   │
│   │   │   │   ├───har
│   │   │   │   │       harRecorder.js
│   │   │   │   │       harTracer.js
│   │   │   │   │
│   │   │   │   ├───recorder
│   │   │   │   │       chat.js
│   │   │   │   │       recorderApp.js
│   │   │   │   │       recorderRunner.js
│   │   │   │   │       recorderSignalProcessor.js
│   │   │   │   │       recorderUtils.js
│   │   │   │   │       throttledFile.js
│   │   │   │   │
│   │   │   │   ├───registry
│   │   │   │   │       browserFetcher.js
│   │   │   │   │       dependencies.js
│   │   │   │   │       index.js
│   │   │   │   │       nativeDeps.js
│   │   │   │   │       oopDownloadBrowserMain.js
│   │   │   │   │
│   │   │   │   ├───trace
│   │   │   │   │   ├───recorder
│   │   │   │   │   │       snapshotter.js
│   │   │   │   │   │       snapshotterInjected.js
│   │   │   │   │   │       tracing.js
│   │   │   │   │   │
│   │   │   │   │   ├───test
│   │   │   │   │   │       inMemorySnapshotter.js
│   │   │   │   │   │
│   │   │   │   │   └───viewer
│   │   │   │   │           traceViewer.js
│   │   │   │   │
│   │   │   │   ├───utils
│   │   │   │   │   │   ascii.js
│   │   │   │   │   │   comparators.js
│   │   │   │   │   │   crypto.js
│   │   │   │   │   │   debug.js
│   │   │   │   │   │   debugLogger.js
│   │   │   │   │   │   env.js
│   │   │   │   │   │   eventsHelper.js
│   │   │   │   │   │   expectUtils.js
│   │   │   │   │   │   fileUtils.js
│   │   │   │   │   │   happyEyeballs.js
│   │   │   │   │   │   hostPlatform.js
│   │   │   │   │   │   httpServer.js
│   │   │   │   │   │   linuxUtils.js
│   │   │   │   │   │   network.js
│   │   │   │   │   │   nodePlatform.js
│   │   │   │   │   │   pipeTransport.js
│   │   │   │   │   │   processLauncher.js
│   │   │   │   │   │   profiler.js
│   │   │   │   │   │   socksProxy.js
│   │   │   │   │   │   spawnAsync.js
│   │   │   │   │   │   task.js
│   │   │   │   │   │   userAgent.js
│   │   │   │   │   │   wsServer.js
│   │   │   │   │   │   zipFile.js
│   │   │   │   │   │   zones.js
│   │   │   │   │   │
│   │   │   │   │   └───image_tools
│   │   │   │   │           colorUtils.js
│   │   │   │   │           compare.js
│   │   │   │   │           imageChannel.js
│   │   │   │   │           stats.js
│   │   │   │   │
│   │   │   │   └───webkit
│   │   │   │           protocol.d.js
│   │   │   │           webkit.js
│   │   │   │           wkAccessibility.js
│   │   │   │           wkBrowser.js
│   │   │   │           wkConnection.js
│   │   │   │           wkExecutionContext.js
│   │   │   │           wkInput.js
│   │   │   │           wkInterceptableRequest.js
│   │   │   │           wkPage.js
│   │   │   │           wkProvisionalPage.js
│   │   │   │           wkWorkers.js
│   │   │   │
│   │   │   ├───third_party
│   │   │   │       pixelmatch.js
│   │   │   │
│   │   │   ├───utils
│   │   │   │   └───isomorphic
│   │   │   │           ariaSnapshot.js
│   │   │   │           assert.js
│   │   │   │           colors.js
│   │   │   │           cssParser.js
│   │   │   │           cssTokenizer.js
│   │   │   │           headers.js
│   │   │   │           locatorGenerators.js
│   │   │   │           locatorParser.js
│   │   │   │           locatorUtils.js
│   │   │   │           manualPromise.js
│   │   │   │           mimeType.js
│   │   │   │           multimap.js
│   │   │   │           protocolFormatter.js
│   │   │   │           protocolMetainfo.js
│   │   │   │           rtti.js
│   │   │   │           selectorParser.js
│   │   │   │           semaphore.js
│   │   │   │           stackTrace.js
│   │   │   │           stringUtils.js
│   │   │   │           time.js
│   │   │   │           timeoutRunner.js
│   │   │   │           traceUtils.js
│   │   │   │           types.js
│   │   │   │           urlMatch.js
│   │   │   │           utilityScriptSerializers.js
│   │   │   │
│   │   │   ├───utilsBundleImpl
│   │   │   │       index.js
│   │   │   │       xdg-open
│   │   │   │
│   │   │   └───vite
│   │   │       ├───htmlReport
│   │   │       │       index.html
│   │   │       │
│   │   │       ├───recorder
│   │   │       │   │   index.html
│   │   │       │   │   playwright-logo.svg
│   │   │       │   │
│   │   │       │   └───assets
│   │   │       │           codeMirrorModule-C3UTv-Ge.css
│   │   │       │           codeMirrorModule-e5r_evYO.js
│   │   │       │           codicon-DCmgc-ay.ttf
│   │   │       │           index-DGRGeke2.js
│   │   │       │           index-eHBmevrY.css
│   │   │       │
│   │   │       └───traceViewer
│   │   │           │   codeMirrorModule.C3UTv-Ge.css
│   │   │           │   codicon.DCmgc-ay.ttf
│   │   │           │   defaultSettingsView.NYBT19Ch.css
│   │   │           │   index.CFOW-Ezb.css
│   │   │           │   index.Cu8n3rOi.js
│   │   │           │   index.html
│   │   │           │   playwright-logo.svg
│   │   │           │   snapshot.html
│   │   │           │   sw.bundle.js
│   │   │           │   uiMode.BatfzHMG.css
│   │   │           │   uiMode.BCbdHUa5.js
│   │   │           │   uiMode.html
│   │   │           │   xtermModule.Beg8tuEN.css
│   │   │           │
│   │   │           └───assets
│   │   │                   codeMirrorModule-rKSJ91kC.js
│   │   │                   defaultSettingsView-CUd-tHFm.js
│   │   │                   xtermModule-BoAIEibi.js
│   │   │
│   │   └───types
│   │           protocol.d.ts
│   │           structs.d.ts
│   │           types.d.ts
│   │
│   └───undici-types
│           agent.d.ts
│           api.d.ts
│           balanced-pool.d.ts
│           cache-interceptor.d.ts
│           cache.d.ts
│           client-stats.d.ts
│           client.d.ts
│           connector.d.ts
│           content-type.d.ts
│           cookies.d.ts
│           diagnostics-channel.d.ts
│           dispatcher.d.ts
│           env-http-proxy-agent.d.ts
│           errors.d.ts
│           eventsource.d.ts
│           fetch.d.ts
│           formdata.d.ts
│           global-dispatcher.d.ts
│           global-origin.d.ts
│           h2c-client.d.ts
│           handlers.d.ts
│           header.d.ts
│           index.d.ts
│           interceptors.d.ts
│           LICENSE
│           mock-agent.d.ts
│           mock-call-history.d.ts
│           mock-client.d.ts
│           mock-errors.d.ts
│           mock-interceptor.d.ts
│           mock-pool.d.ts
│           package.json
│           patch.d.ts
│           pool-stats.d.ts
│           pool.d.ts
│           proxy-agent.d.ts
│           readable.d.ts
│           README.md
│           retry-agent.d.ts
│           retry-handler.d.ts
│           util.d.ts
│           utility.d.ts
│           webidl.d.ts
│           websocket.d.ts
│
├───playwright-report
│       index.html
│
├───selectores
│       login.page.js
│       registro.page.js
│
├───test-results
│       .last-run.json
│
└───tests
        loginFail.spec.js
        loginOk.spec.js
        registroFail.spec.js
        registroOk.spec.js

## ▶️ Cómo Ejecutar las Pruebas

      📌 Requisitos Previos

            Instalar Node: Node se puede instalar mediante npm (Node
            Package Manager) ejecutando el siguiente comando en la línea
            de comando:
                        npm init -y

            Instalar Playwright: Playwright se puede instalar mediante npm (Node
            Package Manager) ejecutando el siguiente comando en la línea
            de comando:
                        npm init playwright@latest

       🚀 Ejecutar las pruebas
        
            Crear un proyecto de Playwright: Una vez instalado Playwright, se
            puede crear un nuevo proyecto ejecutando el siguiente comando en
            la línea de comando:
                                npx playwright test --headed

## 📸 Videos

-[loginOK](https://drive.google.com/file/d/1dPIZ1dhjIc4taqgR4bLgvD_mvfx6thQV/view?usp=sharing)
-[loginFail](https://drive.google.com/file/d/1grqodTG7SfOtTGfEGQa-YEbDDaKKC-e3/view?usp=sharing)
-[registroOk](https://drive.google.com/file/d/1iyjXmRk94syA8kQUFhneMssxp6IgFL3J/view?usp=sharing)
-[registroFail](https://drive.google.com/file/d/1KBZTknPorkCfZ3fqIXIMbrOaUvufR1LR/view?usp=sharing)
