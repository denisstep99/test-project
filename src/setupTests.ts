import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';
import '@testing-library/jest-dom';

// @ts-ignore
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
configure({ adapter: new Adapter() });