import React from 'react';
import { Bar } from 'react-chartjs-2';

import { useState } from 'react';
import Chart from 'chart.js/auto'

const initialState = {
  easyval: 0,
  mediumval: 0, 
  hardval: 0,
}

export const BarChart = ({...formData}) => {

  return (
      <Bar
        data={{
          labels: ['Easy', 'Medium', 'Hard'],
          datasets: [{
            label : 'Level',
            data: [formData.easyval, formData.mediumval, formData.hardval],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          }]
        }}
        height = {800}
        width = {1000}
      />
  )
}