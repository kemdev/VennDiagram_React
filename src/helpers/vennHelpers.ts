import { File } from 'buffer';
import { ReadLine } from 'readline';

import { VennProps, setsProps } from '@/types/vennChart';

const parseFile = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event?.target?.result;
      const elements = (<string>content)?.split('\n')?.map((line: string) => line.trim());
      resolve(elements);
    };
    reader.onerror = (error) => reject(error);

    reader.readAsText(file); // Make sure the file object is being passed here
  });
};

const calculateSets = async (parsedSets: VennProps[], names: string[]) => {
  const sets: setsProps[] = [];
  const intersections: any = {};

  // Calculate individual sets and create a map of intersections
  parsedSets.forEach((set, index) => {
    const setName: string = names[index].split('?time')[0]; // Use the provided name
    sets.push({ sets: [setName], size: set.length });

    set.forEach((element: string | number) => {
      intersections[element] = (intersections[element] || []).concat(setName);
    });
  });

  // Create a map to track unique intersections and their counts
  const intersectionCounts: any = {};

  // Calculate intersections based on the created map
  Object.values(intersections).forEach((intersection: any) => {
    if (intersection.length > 1) {
      const key = intersection.sort().join('_');
      intersectionCounts[key] = (intersectionCounts[key] || 0) + 1;
    }
  });

  // Add intersections to the sets
  Object.entries(intersectionCounts).forEach(([key, count]) => {
    sets.push({ sets: key.split('_'), size: count as number });
  });

  return sets;
};

export { parseFile, calculateSets };
