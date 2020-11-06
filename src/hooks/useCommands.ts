import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useCommand () {
    const commands = useSelector(( state: RootState) => state.commands);
    return commands;
}