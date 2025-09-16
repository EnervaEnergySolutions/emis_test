import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { FacilityAssessmentResults } from '../types';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SpiderChartProps {
  results: FacilityAssessmentResults;
}

const SpiderChart: React.FC<SpiderChartProps> = ({ results }) => {
  const data = {
    labels: results.sections.map(section => section.title),
    datasets: [
      {
        label: 'Current Performance (%)',
        data: results.sections.map(section => section.percentage),
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(59, 130, 246)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.r}%`;
          }
        }
      }
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          callback: function(value: any) {
            return value + '%';
          }
        },
        pointLabels: {
          font: {
            size: 12,
          },
          callback: function(label: string) {
            // Wrap long labels
            if (label.length > 15) {
              const words = label.split(' ');
              if (words.length > 1) {
                const mid = Math.ceil(words.length / 2);
                return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
              }
            }
            return label;
          }
        }
      },
    },
  };

  return (
    <div className="w-full h-96" id="spider-chart-canvas-container">
      <Radar data={data} options={options} />
    </div>
  );
};

export default SpiderChart;