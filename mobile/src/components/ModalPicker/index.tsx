import { Text, View, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { CategoryProps } from "../../pages/Order";
import { Container, Content } from "./styles";

interface ModalPickerProps {
  options: CategoryProps[];
  handleCloseModal: () => void;
  selectecItem: (item: CategoryProps) => void;
}

export const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export function ModalPicker({
  options,
  handleCloseModal,
  selectecItem
}: ModalPickerProps) {

  function onpressItem(item: CategoryProps) {
    selectecItem(item)

    handleCloseModal()
  }

  const option = options.map((item) =>
    <TouchableOpacity
      key={item.id}
      style={styles.options}
      onPress={() => onpressItem(item)}
    >
      <Text
        style={styles.item}
      >
        {item?.name}
      </Text>
    </TouchableOpacity>
  )

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleCloseModal}
    >
      <View
        style={styles.content}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    width: WIDTH - 20,
    height: HEIGHT / 2,
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#524f4f',
    borderRadius: 4
  },
  options: {
    alignItems: 'flex-start',
    borderTopWidth: 0.8,
    borderTopColor: '#524f4f',
  },
  item: {
    margin: 18,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  }
})
