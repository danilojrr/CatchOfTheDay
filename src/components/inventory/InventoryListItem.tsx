import * as React from 'react';
import { SFC } from 'react';
import { Fish, FishFactory } from 'models';
import { InventoryBox } from './InventoryBox';

type InventoryListItemProps = {
  item?: Fish;
  isAddBox?: boolean;
  onClickButton: (fish: Fish) => void;
  onUpdateData?: (updatedFish: Fish) => void;
};

export const InventoryListItem: SFC<InventoryListItemProps> = (props) => (
  <li className="inventory-list-item">{renderInventoryBox(props)}</li>
);

InventoryListItem.displayName = 'InventoryListItem';

InventoryListItem.defaultProps = {
  item: FishFactory.create(),
  isAddBox: false,
  onUpdateData: () => null,
};

const renderInventoryBox = (props: InventoryListItemProps) =>
  props.isAddBox
    ? <InventoryBox onClickButton={props.onClickButton} />
    : (
      <InventoryBox
        buttonText="Remove Fish"
        fishItem={props.item}
        onClickButton={props.onClickButton}
        onUpdateData={props.onUpdateData}
      />
    );
