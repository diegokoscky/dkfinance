import { useContext } from 'react'
import { DataContext } from '../../central/GlobalState'
import Loading from '../Loading'
import ToastComponent from '../Toast/index'

const Notify = () => {
    const [state, dispatch] = useContext(DataContext)
    const { notify } = state

    return (
        <>
            { notify.Loading && <Loading /> }
            { notify.error && <ToastComponent /> }
            { notify.success && <ToastComponent /> }
        </>
    )
}

export default Notify