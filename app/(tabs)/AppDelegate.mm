// File: ios/YourApp/AppDelegate.mm
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  @try {
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
  } @catch (NSException *exception) {
    NSLog(@"[Launch Exception] %@\n%@", exception.reason, exception.callStackSymbols);
    return NO;
  }
}