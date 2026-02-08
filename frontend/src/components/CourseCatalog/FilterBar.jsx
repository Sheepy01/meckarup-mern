import React, { useState } from 'react';
import { FilterList } from '@mui/icons-material';

const FilterBar = ({ activeFilter, onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const filters = [
    { id: 'all', label: 'All Courses', count: 10 },
    { id: 'programming', label: 'Programming', count: 3 },
    { id: 'data-science', label: 'Data Science', count: 5 },
    { id: 'research-tools', label: 'Research Tools', count: 1 },
    { id: 'engineering', label: 'Engineering', count: 1 }
  ];

  return (
    <div>
      {/* Mobile Toggle */}
      <div style={{
        display: 'none',
        marginBottom: '1rem'
      }}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: '#3B82F6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <FilterList />
          {filters.find(f => f.id === activeFilter)?.label || 'Filter Courses'}
        </button>
      </div>
      
      {/* Desktop Filter Bar / Mobile Expanded */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '1rem',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        border: '1px solid #E5E7EB'
      }}>
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: activeFilter === filter.id ? '#1A365D' : 'transparent',
              color: activeFilter === filter.id ? 'white' : '#6B7280',
              border: activeFilter === filter.id ? '2px solid #1A365D' : '2px solid #E5E7EB',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '0.95rem',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              if (activeFilter !== filter.id) {
                e.currentTarget.style.borderColor = '#3B82F6';
                e.currentTarget.style.color = '#3B82F6';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseOut={(e) => {
              if (activeFilter !== filter.id) {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.color = '#6B7280';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            <span>{filter.label}</span>
            <span style={{
              background: activeFilter === filter.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(59, 130, 246, 0.1)',
              color: activeFilter === filter.id ? 'white' : '#3B82F6',
              padding: '0.125rem 0.5rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: '700'
            }}>
              {filter.count}
            </span>
            
            {/* Active indicator */}
            {activeFilter === filter.id && (
              <div style={{
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '20px',
                height: '4px',
                background: '#3B82F6',
                borderRadius: '2px'
              }}></div>
            )}
          </button>
        ))}
      </div>
      
      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          div > div:first-child {
            display: block;
          }
          
          div > div:last-child {
            display: ${isExpanded ? 'flex' : 'none'};
            margin-top: 1rem;
            flex-direction: column;
            align-items: stretch;
            gap: 0.5rem;
          }
          
          div > div:last-child > button {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default FilterBar;