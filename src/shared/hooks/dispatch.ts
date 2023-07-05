import { useDispatch } from 'react-redux'
import { ProjectActions } from '../../redux/actions/typesActions'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '../../redux'

export const useAppDispatch = useDispatch<
	ThunkDispatch<RootState, void, ProjectActions>
>
