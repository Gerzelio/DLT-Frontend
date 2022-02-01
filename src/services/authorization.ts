import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setAuthorization(authorization: string): Promise<void> {
    if (authorization) {
      await AsyncStorage.setItem('dlt-authorization', authorization);
    }
  }
  
export async function getAuthorization(): Promise<String|null> {
    return await AsyncStorage.getItem('dlt-authorization');
}

export async function cleanStorage() {
  return await AsyncStorage.removeItem('dlt-authorization');
}