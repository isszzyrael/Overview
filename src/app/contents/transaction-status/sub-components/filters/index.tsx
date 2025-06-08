import { Button } from '@/app/component/Button';
import { SearchableMultiSelectDropdown } from '@/app/contents/transaction-status/sub-components/multi-select';
import React from 'react';

const actionTypes = [
  'account_edit',
  'account_login',
  'account_register',
  'account_registration',
  'deposit',
  'money_transfer',
  'verification',
];

export const Filters = () => {
  const handleApply = (selectedItems: string[]) => {
    console.log('Selected action types:', selectedItems);
  };

  return (
    <div className="flex gap-2 mb-4">
      <SearchableMultiSelectDropdown
        title="Action type"
        options={actionTypes}
        onApply={handleApply}
      />
      <Button
        variant="grey-outlined"
        className="bg-white text-text-secondary border-border_color-200"
      >
        + Add filter
      </Button>
    </div>
  );
};
