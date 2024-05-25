import {FC} from "react";
import {View, TextInput, Modal, Image} from "react-native";
import {styles} from "../../styles/global";
import {__Button} from "../share/__Button";

type InputsProps = {
    text: string;
    visibleModal?: boolean;
    onLongClose?: () => void;
    handleInput: (text: string) => void;
    addGoals: () => void;
};

export const Inputs: FC<InputsProps> = ({
    addGoals,
    onLongClose,
    visibleModal,
    handleInput,
    text,
}) => {
    return (
        <Modal visible={visibleModal} style={[styles.modal]} animationType="slide">
            <View style={[styles.inputContainer]}>
                <View style={{alignItems: "center"}}>
                    <Image
                        style={{width: 200, height: 200}}
                        source={require("../../assets/images/goal.jpg")}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: 15

                }}>
                    <TextInput
                        value={text}
                        onChangeText={handleInput}
                        style={[styles.textInput, {borderColor: text ? "black" : "violet"}]}
                        placeholder="Enter course goal"
                    />
                    <__Button
                        type="touchable"
                        textCenter
                        styles={[styles.Button, {flexGrow: 1}]}
                        text="Submit"
                        color="#fff"
                        onClickHanlder={addGoals}
                        onLongClickHandler={onLongClose}
                    />
                </View>

                <__Button
                    type="touchable"
                    textCenter
                    styles={[styles.Button]}
                    text="Close modal"
                    color="#fff"
                    onClickHanlder={onLongClose}

                />

                {/* <LinkButton
        url="https://www.udemy.com"
        style={[styles.Button]}
        children="Udemy"
      /> */}
            </View>
        </Modal>
    );
};
