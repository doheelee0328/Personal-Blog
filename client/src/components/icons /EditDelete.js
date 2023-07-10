import { Wrapper, EditWrapper, TrashWrapper } from './EditDelete.styled'
const EditDelete = () => {
  return (
    <>
      <Wrapper>
        <EditWrapper>
          <i class='fa-regular fa-pen-to-square'></i>
        </EditWrapper>
        <TrashWrapper>
          <i class='fa-regular fa-trash-can'></i>
        </TrashWrapper>
      </Wrapper>
    </>
  )
}

export default EditDelete
