import { useState, useEffect } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  useEffect(() => {
    let sub;
    const startWatching = async () => {
      try {
        await requestForegroundPermissionsAsync();
        sub = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (err) {
        console.log(err);
        setErr(err);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (sub) {
        sub.remove();
      }
      sub = null;
    }

    // clean up function
    return () => {
      if (sub) {
        sub.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
