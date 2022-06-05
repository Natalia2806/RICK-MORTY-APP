import {renderHook} from '@testing-library/react-hooks';
import{Search} from '../components/Search';


describe('Pruebas del custom hook Search', ()=>{

    test('Debe retornar el estado inicial del hook', ()=>{
        const {result} = renderHook(()=>Search('simpson'));
        const {filter, cargando} = result.current;

        expect(filter).toEqual([]);
        expect(cargando).toBe(true);
    })

    test('Debe retornar los elementos del valor de la búsqueda', async ()=>{
        const {result, waitForNextUpdate} = renderHook(()=>Search('simpson'));
        await waitForNextUpdate();
        const {gifs, cargando} = result.current;
        
        expect(gifs.length).toBe(5);
        expect(cargando).toBe(false);
    })
    
})