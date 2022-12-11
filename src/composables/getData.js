import dataJson from "../assets/data/data.json";
import { ref } from "vue";

const getData = () => {
  const data = ref(null);
  const load = async () => {
    try {
      let loaded = await dataJson.data;
      loaded = loaded.slice(0, 3);
      data.value = loaded;
    } catch (err) {
      console.log(err.message);
    }
  };

  return { data, load };
};

export default getData;
