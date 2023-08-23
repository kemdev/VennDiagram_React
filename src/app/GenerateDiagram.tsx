import React from 'react';
import Venn from '../components/venn/Venn'; // import the Venn component
import { useFileUploadsStore } from '@/stores/fileUploadsStore';
import { useVennSetsStore } from '@/stores/vennSetsStore';

const GenerateDiagram: React.FC = () => {

  const vennSets = useVennSetsStore(state => state.vennSets)


  return (
    <div>
      <h1>Generate Venn Diagram</h1>
      {/* <Venn /> */}
      {/* Additional UI components if needed */}
    </div>
  );
};

export default GenerateDiagram;
