
import AsyncStorage from '@react-native-async-storage/async-storage';
const setData = async (USER_KEY, value) => {
    await AsyncStorage.setItem(USER_KEY, value);
};

const getData = async USER_KEY => {
    return await AsyncStorage.getItem(USER_KEY);
};
const removeData = async (USER_KEY) => {
    await AsyncStorage.removeItem(USER_KEY);
};

const clearAll = async () => {
    await AsyncStorage.clear();
    return true
}

export {
    setData,
    getData,
    removeData,
    clearAll

};
