import React from 'react';
import ContentSection from './ContentSection/ContentSection';
import { specialtiesImages } from '../../data/specialtiesImages';

export default function Specialties() {
  return (
    <ContentSection
      heading="Self-taught developer specializing in..."
      items={specialtiesImages}
    />
  );
};