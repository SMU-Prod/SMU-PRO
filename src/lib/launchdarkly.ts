import * as LaunchDarkly from '@launchdarkly/node-server-sdk';

let client: LaunchDarkly.LDClient | null = null;

function getLDClient(): LaunchDarkly.LDClient {
  if (!client) {
    client = LaunchDarkly.init(process.env.LAUNCHDARKLY_SDK_KEY!);
  }
  return client;
}

export async function getFlag<T = boolean>(
  flagKey: string,
  userId: string,
  defaultValue: T
): Promise<T> {
  const ldClient = getLDClient();
  await ldClient.waitForInitialization();
  return ldClient.variation(flagKey, { kind: 'user', key: userId }, defaultValue) as T;
}
