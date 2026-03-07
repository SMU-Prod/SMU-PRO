import * as LaunchDarkly from '@launchdarkly/node-server-sdk';

const SDK_KEY = 'sdk-d1dca270-fbdc-4109-9300-24c107e337f3';

const client = LaunchDarkly.init(SDK_KEY);

client.once('ready', async function () {
  console.log('SDK successfully initialized!');
  await client.flush();
  console.log('Events flushed. LaunchDarkly should now detect the connection.');
  await client.close();
  process.exit(0);
});

client.once('failed', function (err) {
  console.error('SDK failed to initialize:', err);
  process.exit(1);
});
