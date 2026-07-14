function hook(){
  Java.perform(function () {
    try {
      var ActivityThread = Java.use('android.app.ActivityThread');
      var application = ActivityThread.currentApplication();
      if (application === null) {
        console.log('[SanaRom] application is not ready');
        return;
      }

      var context = application.getApplicationContext();
      var packageName = context.getPackageName();
      var appInfo = context.getApplicationInfo();

      console.log('[SanaRom] package=' + packageName);
      console.log('[SanaRom] process=' + ActivityThread.currentProcessName());
      console.log('[SanaRom] sourceDir=' + appInfo.sourceDir.value);
      console.log('[SanaRom] dataDir=' + appInfo.dataDir.value);
    } catch (error) {
      console.log('[SanaRom] example failed: ' + error);
    }
  });
}
hook();
