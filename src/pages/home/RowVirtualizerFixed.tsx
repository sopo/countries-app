import * as React from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import IconButton from '@/components/button/icon-button/icon-button'
import CardContainer from '@/components/cards/card'
import CardContent from '@/components/cards/card-content/card-content'
import CardFooter from '@/components/cards/card-footer/card-footer'
import RatingSection from '@/components/rating/rating-section'
import DeleteIcon from '@/assets/icons/trash.svg?react';
import EditIcon from '@/assets/icons/pencil.svg?react';
import CardHeader from '@/components/cards/card-header/card-header'
import { Country } from '@/components/cards/cards-data/country'
import { Link } from 'react-router-dom'
interface RowVirtualizerFixedProps{
  countries: Country[],
  handleLikeClick: (id: string, rating: number) => void
  handleEditClick: (id: string) => void
  handleDeleteClick: (id: string) => void
  deleteLoading: boolean
  errorDelete: boolean
}
const RowVirtualizerFixed: React.FC<RowVirtualizerFixedProps> = ({countries, handleLikeClick, handleEditClick, handleDeleteClick, deleteLoading, errorDelete}) => {
  const parentRef = React.useRef(null)
  const rowVirtualizer = useVirtualizer({
    count: countries?.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 433,
    overscan: 6,
  })

if(!countries){
  return null
}

  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      width:'100%'
    }}>

      <div
        // ვიუპორტი
        ref={parentRef}
        className="List"
        style={{
          height: `500px`,
          width: "400px",
          overflow: 'auto',
         
        }}
      >
        
        <div
        //მთლიანი კონტეინერი
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
           
          }}
        >
          {rowVirtualizer.getVirtualItems().map((item)=>{
            
            const country = countries[item.index]
            return(
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${item.size}px`,
                transform: `translateY(${item.start}px)`,
              }}>

              <CardContainer key={country.id}>
              <Link to={`countries/${country.id}`}>
                <CardHeader cardImageUrl={country.imageUrl} />
                <CardContent country={country} />
              </Link>
              <CardFooter>
                <RatingSection
                  rating={country.rating}
                  onClick={() => handleLikeClick(country.id, country.rating)}
                />
                <IconButton>
                  <EditIcon
                    className="icon-l icon-secondary"
                    onClick={() => handleEditClick(country.id)}
                  />
                </IconButton>
                <IconButton disabled={deleteLoading}>
                  <DeleteIcon
                    className="icon-l icon-secondary"
                    onClick={() => handleDeleteClick(country.id)}
                  />
                  {errorDelete && <p>Couldn't delete</p>}
                </IconButton>
              </CardFooter>
            </CardContainer>
            </div>
            )
          })}
        </div>
        </div>
  
    </div>
  )
}
export default RowVirtualizerFixed