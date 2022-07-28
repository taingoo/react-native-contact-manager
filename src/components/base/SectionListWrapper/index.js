/* eslint-disable react-native/no-inline-styles */
import {Block, LoadMore} from '@components';
import {COLORS} from '@theme';
import React from 'react';
import {RefreshControl, SectionList} from 'react-native';

const SectionListWrapper = ({
  data = null,
  page = 1,
  renderItem,
  keyExtractor,
  renderSectionHeader,
  isLoading = false,
  EmptyComponent,
  HolderComponent,
  ItemSeparator = 16,
  SectionSeparator = 16,
  onRefresh,
  onLoadMore,
  containerStyle,
  ...rest
}) => {
  const refreshing = isLoading && page === 1;

  const _keyExtractor = (item, index) =>
    keyExtractor ? keyExtractor(item, index) : String(index);

  const _renderItem = props => renderItem(props);

  const _renderHeader = props =>
    renderSectionHeader ? renderSectionHeader(props) : null;

  const _renderEmpty = () =>
    !!data && EmptyComponent ? <EmptyComponent /> : null;

  const _renderFooter = () => (
    <Block height={50}>{isLoading && page > 1 && <LoadMore />}</Block>
  );

  const _renderItemSeparator = () => <Block height={ItemSeparator} />;

  const _renderSectionSeparator = () => <Block height={SectionSeparator} />;

  if (isLoading && page === 1 && !data) {
    return HolderComponent ? <HolderComponent /> : null;
  }

  return (
    <Block flex style={containerStyle}>
      <SectionList
        {...rest}
        sections={data ?? []}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        renderSectionHeader={_renderHeader}
        ListEmptyComponent={_renderEmpty}
        // ListFooterComponent={_renderFooter}
        ItemSeparatorComponent={_renderItemSeparator}
        SectionSeparatorComponent={_renderSectionSeparator}
        onEndReached={onLoadMore}
        onEndReachedThreshold={1}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        refreshControl={
          onRefresh && (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={COLORS.blue_300}
            />
          )
        }
      />
    </Block>
  );
};

export default SectionListWrapper;
